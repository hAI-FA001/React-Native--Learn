import { Image, ImageBackground, ScrollView, Text, View } from "react-native";

const logoImg = require("@/assets/images/adaptive-icon.png");

export default function Index() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <ScrollView>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 200, height: 200 }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          repudiandae corrupti tenetur aut. Error aliquam quas itaque laboriosam
          alias sapiente porro! Omnis dolorum ab in dolorem incidunt veniam,
          corporis repudiandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illum repudiandae corrupti tenetur aut. Error
          aliquam quas itaque laboriosam alias sapiente porro! Omnis dolorum ab
          in dolorem incidunt veniam, corporis repudiandae. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Illum repudiandae corrupti
          tenetur aut. Error aliquam quas itaque laboriosam alias sapiente
          porro! Omnis dolorum ab in dolorem incidunt veniam, corporis
          repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum repudiandae corrupti tenetur aut. Error aliquam quas itaque
          laboriosam alias sapiente porro! Omnis dolorum ab in dolorem incidunt
          veniam, corporis repudiandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illum repudiandae corrupti tenetur aut. Error
          aliquam quas itaque laboriosam alias sapiente porro! Omnis dolorum ab
          in dolorem incidunt veniam, corporis repudiandae. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Illum repudiandae corrupti
          tenetur aut. Error aliquam quas itaque laboriosam alias sapiente
          porro! Omnis dolorum ab in dolorem incidunt veniam, corporis
          repudiandae.
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 200, height: 200 }}
        />
      </ScrollView>
    </View>
  );
}
