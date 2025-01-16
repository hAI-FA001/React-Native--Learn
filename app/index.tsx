import { Image, ImageBackground, Text, View } from "react-native";

const logoImg = require("@/assets/images/adaptive-icon.png");

export default function Index() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 200, height: 200 }}
      /> */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Hello, world!</Text>
      </ImageBackground>
    </View>
  );
}
