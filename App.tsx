import { StyleSheet, Text, View } from "react-native";
import SplashPage from "./src/pages/splashPage";
export default function App() {
  return (
    <View style={styles.container}>
      <SplashPage></SplashPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
