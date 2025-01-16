import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
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
const loremTxt =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ipsa ea excepturi velit mollitia voluptates, laborum ducimus explicabo quibusdam quam aperiam ipsum. Vero repellat esse cupiditate inventore similique fugit et.";

export default function Index() {
  const [isVis, setVis] = useState(false);

  return (
    <View style={{ backgroundColor: "teal", flex: 1, padding: 60 }}>
      <Button
        title="Show 1"
        onPress={() => {
          Alert.alert("Hello, world!");
        }}
      />

      <Button
        title="Show 2"
        onPress={() => {
          Alert.alert("Hello, world!", loremTxt);
        }}
      />

      <Button
        title="Show 3"
        onPress={() => {
          Alert.alert("Hello, world!", loremTxt, [
            {
              text: "OK",
              onPress: () => {
                console.log("OK pressed");
              },
            },
            {
              text: "Cancel",
              onPress: () => {
                console.log("Cancelled");
              },
            },
          ]);
        }}
      />
    </View>
  );
}
