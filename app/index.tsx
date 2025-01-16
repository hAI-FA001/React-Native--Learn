import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Text>
        <Text style={{ color: "green" }}>Hello</Text>,{" "}
        <Text style={{ color: "blue" }}>world</Text>!
      </Text>
    </View>
  );
}
