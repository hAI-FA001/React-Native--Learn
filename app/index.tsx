import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const logoImg = require("@/assets/images/adaptive-icon.png");

export default function Index() {
  const [isVis, setVis] = useState(false);

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size={"small"} />
      <ActivityIndicator
        size={"large"}
        color={"midnightblue"}
        animating={false} // show or hide
      />
      <ActivityIndicator size={"large"} color={"midnightblue"} />
    </View>
  );
}
