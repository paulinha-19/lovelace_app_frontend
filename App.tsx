import { AuthProvider } from "./context/AuthContext";
import MainStack from "./navigators/MainStack";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
