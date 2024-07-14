import React, { useRef } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const OurOptionsOne = ({ navigation }) => {
  const viewRef = useRef(null);

  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationX < -100) {
      navigation.navigate("OurOptionsTwo");
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
        <Text style={styles.title}>Nossas opções...</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.option}>
            <View>
              <Image
                source={require("../../assets/morango.png")}
                style={styles.image}
              />
            </View>
            <Text style={styles.optionText}>Carreira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/sol.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Cursos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/bota.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Rede de apoio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/megafone.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Recursos úteis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/boca.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Bootcamps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image
              source={require("../../assets/flor.png")}
              style={styles.image}
            />
            <Text style={styles.optionText}>Hackatons</Text>
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

export default OurOptionsOne;
