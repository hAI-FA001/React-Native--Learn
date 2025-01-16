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

import Greet from "./Components/Greet";

const logoImg = require("@/assets/images/adaptive-icon.png");
const loremTxt =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ipsa ea excepturi velit mollitia voluptates, laborum ducimus explicabo quibusdam quam aperiam ipsum. Vero repellat esse cupiditate inventore similique fugit et.";

export default function Index() {
  const [isVis, setVis] = useState(false);

  return (
    <View style={{ backgroundColor: "teal", flex: 1, padding: 60 }}>
      <Greet name="World! 1" />
      <Greet name="World! 2" />
      <Greet name="World! 3" />
    </View>
  );
}
