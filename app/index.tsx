import {
  Button,
  Image,
  ImageBackground,
  Pressable,
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
      />
      <Pressable
        onPress={() => {
          console.log("Pressed Image");
        }}
        onLongPress={() => {
          console.log("Long-pressed Image");
        }}
      >
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Pressed Text");
        }}
        onPressIn={() => {
          console.log("Press-In");
        }}
        onPressOut={() => {
          console.log("Press-out");
        }}
      >
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          expedita consectetur vel quibusdam, aspernatur porro nam velit, vitae
          vero exercitationem repudiandae tenetur eaque, laborum rem ea autem
          consequuntur est repellat. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Incidunt impedit eaque hic dolore, in molestias iure
          delectus eveniet facere. Error vitae harum doloribus aliquam ipsam et
          officia ratione porro quis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque, explicabo asperiores nulla ad quam sint quod
          error dolorem nisi a unde necessitatibus minima ut in alias commodi
          corrupti eveniet. Laborum.
        </Text>
      </Pressable>
    </View>
  );
}
