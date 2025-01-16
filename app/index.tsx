import { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const logoImg = require("@/assets/images/adaptive-icon.png");

export default function Index() {
  const [isVis, setVis] = useState(false);

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button
        title="Open Modal"
        onPress={() => {
          console.log("Pressed button");
          setVis(true);
        }}
      />
      <Modal
        visible={isVis}
        onRequestClose={() => {
          console.log("Back button pressed");
          setVis(false);
        }}
        animationType="slide" // or fade
        presentationStyle="formSheet"
      >
        <View style={{ padding: 30 }}>
          <Text>Modal Content Here</Text>
          <Button
            title="Close"
            onPress={() => {
              console.log("Closing");
              setVis(false);
            }}
          ></Button>
        </View>
      </Modal>
    </View>
  );
}
