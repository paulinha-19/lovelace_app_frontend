import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { WebView } from "react-native-webview";
import getBotpressWebchat from "./getBotpressWebchat";

interface Props {
  botConfig: any;
  onMessage: (event: any) => void;
}

const broadcastAllNotifications = `
window.botpressWebChat.onEvent(
  (event) => {
    window.ReactNativeWebView.postMessage(JSON.stringify(event));
  },
  ['*']
);

true; // note: this is required, or you'll sometimes get silent failures
`;

const BpWidget = forwardRef((props: Props, ref) => {
  const webref = useRef<WebView>(null);

  const { botConfig, onMessage } = props;

  const { html, baseUrl } = getBotpressWebchat(botConfig);

  const invokeBotpressMethod = (method: string, ...args: any[]) => {
    if (!webref.current) {
      throw new Error("Webview must be loaded to run commands");
    }
    const run = `
    window.botpressWebChat.${method}(${args
      .map((arg) => JSON.stringify(arg))
      .join(",")});
    true;
    `;
    webref.current.injectJavaScript(run);
  };

  useImperativeHandle(ref, () => ({
    sendEvent: (event: any) => {
      invokeBotpressMethod("sendEvent", event);
    },
    sendPayload: (payload: any) => {
      invokeBotpressMethod("sendPayload", payload);
    },
    mergeConfig: (config: any) => {
      invokeBotpressMethod("mergeConfig", config);
    },
  }));

  return (
    <WebView
      ref={webref}
      style={{ flex: 1 }}
      source={{
        baseUrl,
        html,
      }}
      onMessage={(event) => onMessage(event.nativeEvent.data)}
      injectedJavaScript={broadcastAllNotifications}
    />
  );
});

export default BpWidget;
