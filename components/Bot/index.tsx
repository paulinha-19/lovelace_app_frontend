import React, { useRef } from "react";
import { View, Button } from "react-native";
import BpWidget from "./BpWidget";
import BpIncommingMessagesListener from "./BpIncommingMessagesListener";

const testingConfig = {
  composerPlaceholder: "Converse com a lovinha",
  botConversationDescription: "lovinhabot",
  botId: "7f508f3b-da6a-4696-99ce-e4f75a061535",
  hostUrl: "https://cdn.botpress.cloud/webchat/v1",
  messagingUrl: "https://messaging.botpress.cloud",
  clientId: "7f508f3b-da6a-4696-99ce-e4f75a061535",
  webhookId: "0809c5d9-cc4c-48f5-973c-9ab55bd24fed",
  lazySocket: true,
  frontendVersion: "v1",
  showPoweredBy: true,
  hideWidget: false, // Asegúrate de que el widget no esté oculto
  disableAnimations: true,
  closeOnEscape: false,
  showConversationsButton: false,
  enableTranscriptDownload: false,
  className: "webchatIframe",
  containerWidth: "100%",
  layoutWidth: "100%",
  showCloseButton: false,
  botName: "lovinhabot",
};

const Bot: React.FC = () => {
  const botpressWebChatRef = useRef<any>(null);

  const toggleWebchat = () => {
    botpressWebChatRef.current?.sendEvent({ type: "show" });
  };

  const sendExamplePayload = () => {
    botpressWebChatRef.current?.sendPayload({ type: "text", text: "hello" });
  };

  const changeExampleConfig = () => {
    botpressWebChatRef.current?.mergeConfig({
      botName: Math.random().toString(),
    });
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{ height: 50, justifyContent: "center", alignItems: "center" }}
        >
          {/* <Text>Your app header or spacer</Text> */}
        </View>
        <BpWidget
          ref={botpressWebChatRef}
          botConfig={testingConfig}
          onMessage={(event: any) => {
            console.log("event from widget", event);
          }}
        />
        <Button onPress={toggleWebchat} title="Toggle webchat" />
        <Button onPress={changeExampleConfig} title="changeConfig" />
        <Button onPress={sendExamplePayload} title="send message" />
      </View>
      {/* In case your webchat is not rendered and you want to catch bot messages */}
      <BpIncommingMessagesListener
        botConfig={testingConfig}
        onBotMessage={(event: any) => {
          console.log("bot message", event);
        }}
      />
    </View>
  );
};

export default Bot;