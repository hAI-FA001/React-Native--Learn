import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";

const logoImg = require("@/assets/images/adaptive-icon.png");

export default function Index() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button
        title="Hello There"
        onPress={() => {
          console.log("Pressed button");
        }}
        color="midnightblue"
        disabled
      />
    </View>
  );
}
