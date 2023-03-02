import { SplashScreen, Stack } from "expo-router";
import {
  useFonts,
  OpenSans_700Bold,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans";

import Header from "../src/components/Header";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_600SemiBold,
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
