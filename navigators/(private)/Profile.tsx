import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCF0F1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default Profile;
