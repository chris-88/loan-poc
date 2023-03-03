import { SplashScreen, Stack } from "expo-router";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

import Header from "../src/components/Header";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });
  if (!fontsLoaded) {
    return <SplashScreen />;
  }
  return (
    <>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
