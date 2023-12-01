import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500 text-2xl">
        Welcome Back Rinku Vishwakarma on Mobile Plateform
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
