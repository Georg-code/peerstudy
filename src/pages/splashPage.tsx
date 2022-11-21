import { StyleSheet, Text, View } from "react-native";

const SplashPage = () => {
  return (
    <View style={styles.container}>
      <Text>PeerStudy</Text>
      <Text>
        Connect with Friends and get motivated when they study. Also minimize
        distraction while using the app. And that for free
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashPage;
