import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1 }}>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      ></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      ></View>
    </View>
  );
}
