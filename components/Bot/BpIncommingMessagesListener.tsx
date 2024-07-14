import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import getBotpressWebchat from './getBotpressWebchat';

interface Props {
  botConfig: any;
  onBotMessage: (event: any) => void;
}

const broadcastBotMessages = `
window.botpressWebChat.onEvent(
  (event) => {
    window.ReactNativeWebView.postMessage(JSON.stringify(event));
  },
  ['MESSAGE_RECEIVED']
);
true; // note: this is required, or you'll sometimes get silent failures
`;

const BpIncommingMessagesListener: React.FC<Props> = (props) => {
  const { botConfig, onBotMessage } = props;

  const { html, baseUrl } = getBotpressWebchat(botConfig, false);

  return (
    <View style={{ position: 'absolute', top: 0, left: 0 }}>
      <WebView
        source={{
          baseUrl,
          html,
        }}
        onMessage={(event) => onBotMessage(event.nativeEvent.data)}
        injectedJavaScript={broadcastBotMessages}
      />
    </View>
  );
};

export default BpIncommingMessagesListener;
