import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  ImageBackground,
} from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF0F1",
    alignItems: "center",
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
