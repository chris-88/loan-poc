import { StatusBar } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

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
      <StatusBar hidden={true} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="modals/NeedHelp"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="modals/AccountDetails"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="modals/ThankYou"
          options={{ presentation: "transparentModal" }}
        />
      </Stack>
    </>
  );
}
