import { useState } from "react";
import {
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
      <StatusBar
        backgroundColor={"lightgreen"}
        barStyle={"dark-content"}
        hidden={isVis}
      />
      <Button
        title="Toggle Status Bar"
        onPress={() => {
          setVis(!isVis);
        }}
      />
    </View>
  );
}
