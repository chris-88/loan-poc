import React from "react";
import { View } from "react-native";
import { PageHeading, ProgressButton, NumPad } from "../../src/components";
import { useRouter } from "expo-router";

export default function SetPIN() {
  const router = useRouter();
  const onPress = () => {
    router.replace({
      pathname: "/modals/ThankYou",
      params: {
        title: "Done!",
        icon: "onepassword",
        message: "You're pin has been set!",
        next: "/sign-in",
      },
    });
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16, flex: 1, alignItems: "center" }}>
        <PageHeading title={"Please create a passcode"} />
        <NumPad />
      </View>
      <ProgressButton
        onPress={onPress}
        backEnable={true}
        enabled={true}
        title={"Next"}
      />
    </View>
  );
}
