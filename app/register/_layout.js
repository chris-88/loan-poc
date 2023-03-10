import { StatusBar } from "react-native";
import { Stack } from "expo-router";

import Header from "../../src/components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <StatusBar barStyle={"light-content"} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
