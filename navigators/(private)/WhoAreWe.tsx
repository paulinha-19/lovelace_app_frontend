import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Text, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { PanGestureHandler } from "react-native-gesture-handler";

const WhoAreWe = () => {
  const viewRef = useRef(null);
  const navigation = useNavigation<any>();
  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationX < -100) {
      navigation.navigate("OurOptionsOne");
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animatable.View
        ref={viewRef}
        animation="fadeIn"
        duration={1500}
        style={styles.container}
      >
        <Text style={styles.title}>Quem somos nós?</Text>
        <Image
          source={require("../../assets/who-are-we.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Bem vinda ao aplicativo Lovelace! Aqui você encontrará informações
          essenciais sobre seus direitos, dicas de carreira, uma rede de apoio e
          muito mais. Junte-se a nós nesta jornada de empoderamento e
          transformação.
        </Text>
      </Animatable.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF0F1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4D3082",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#4D3082",
    fontWeight: "bold",
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default WhoAreWe;
