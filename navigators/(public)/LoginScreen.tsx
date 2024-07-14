import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../types/stack-type";
import { AuthData } from "../../types/auth-data";
import formSchema from "../../schemas/form";
import { ControlledInput } from "../../components/ControlledInput";
import { useAuth } from "../../hooks/useAuth";
import { AxiosError } from "axios";

export const LoginScreen = () => {
  const navigation = useNavigation<StackTypes>();
  const [showPassword, setShowPassword] = useState(true);
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: AuthData) => {
    try {
      await signIn(data);
      reset();
      navigation.navigate("WhoAreWeStack");
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../../assets/grl-pwr.jpg")}
            resizeMode="cover"
            style={styles.header}
          />
          <Image
            source={require("../../assets/grl-PB.png")}
            style={{
              width: 200,
              height: 300,
              position: "absolute",
              top: 0,
              left: 280,
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/logo.png")} />
        </View>
        <View style={styles.form}>
          <View style={styles.contentInput}>
            <ControlledInput
              control={control}
              name="email"
              placeholder="Insira o email userteste@gmail.com"
              placeholderColor="gray"
              labelStyle={{ fontSize: 18 }}
              autoCapitalize="none"
              keyboardType="email-address"
              leftIcon={<MaterialIcons name="email" size={26} color="black" />}
              errorMessage={errors?.email?.message}
              borderColorInputFocus="#BB2466"
              borderColorInputBlur="black"
            />
          </View>
          <View style={styles.contentInput}>
            <ControlledInput
              control={control}
              name="password"
              placeholder="Insira a senha 12345678"
              labelStyle={{ fontSize: 18 }}
              placeholderColor="gray"
              secureTextEntry={!showPassword}
              leftIcon={<Ionicons name="lock-closed" size={24} color="black" />}
              rightIcon={
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={24}
                  color="black"
                  onPress={toggleShowPassword}
                />
              }
              errorMessage={errors?.password?.message}
              borderColorInputFocus="#BB2466"
              borderColorInputBlur="black"
            />
          </View>
          <View style={styles.buttonSubmit}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Text style={styles.textButtonSubmit}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerRedirectScreen}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.redirectScreenLink}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ ...styles.redirectScreenLink, paddingTop: 15 }}>
                Criar conta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF0F1",
  },
  header: {
    height: 300,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  form: {
    width: "100%",
    paddingLeft: 60,
    paddingRight: 60,
  },
  contentInput: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  buttonSubmit: { padding: 15, backgroundColor: "#BB2466", borderRadius: 10 },
  textButtonSubmit: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerRedirectScreen: {
    marginTop: 20,
  },
  redirectScreenLink: {
    color: "#748398",
    fontSize: 16,
    fontWeight: "500",
  },
  borderInputs: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#FED74D",
  },
  textColor: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  textHeader: {
    color: "white",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 20,
    paddingBottom: 40,
  },
  headerForm: {
    alignItems: "center",
    paddingTop: 15,
  },
  containerForgotPassword: {
    marginVertical: 18,
  },
  forgotPasswordLink: {
    color: "#000",
    fontSize: 16,
  },
});
