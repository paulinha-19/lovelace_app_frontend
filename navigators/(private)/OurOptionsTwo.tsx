import React, { useRef } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const OurOptionsTwo = ({ navigation }) => {
  const viewRef = useRef(null);

  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationX < -100) {
      navigation.navigate("WhoAreWe");
    } else if (event.nativeEvent.translationX > 100) {
      navigation.goBack();
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
        <View style={styles.grid}>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/marg.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Oportunidades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/melancia.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Saúde e Bem estar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/quizz.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Quizzes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/headphone.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/mulher.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Game Lovelace</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/coruja.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Notícias</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF0F1",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#4D3082",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    position: "relative",
  },
  option: {
    width: "45%",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#4D3082",
    fontWeight: "bold",
  },
});

export default OurOptionsTwo;
