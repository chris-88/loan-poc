import { Text, View } from "react-native";
import { SignButton, PageHeading, TextBlock } from "../../src/components";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
  const handleSignUp = () => {
    router.push("/register/SignUp");
  };
  const handleSignIn = () => {
    router.push("/register/Login");
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 16,
      }}
    >
      <PageHeading title={"Hello there!"} />
      <TextBlock
        text={
          "Welcome to the BOI mobile app! It doesn't look like this device is register."
        }
      />
      <TextBlock
        text={
          "Please select from the options below to register this device for secure mobile banking."
        }
      />
      <View style={{ marginTop: 16 }} />
      <SignButton
        title={"Sign up"}
        version={"PRIMARY"}
        onPress={handleSignUp}
      />
      <SignButton
        title={"Log in"}
        version={"SECONDARY"}
        onPress={handleSignIn}
      />
      <View
        style={{
          flexDirection: "row",
          paddingTop: 32,
          paddingBottom: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 1,
            width: "46%",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />
        <Text
          style={{
            paddingHorizontal: 5,
            color: "rgba(0,0,0,0.5)",
            fontFamily: "OpenSans_400Regular",
            fontSize: 16,
          }}
        >
          or
        </Text>
        <View
          style={{
            height: 1,
            width: "46%",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />
      </View>
      <SignButton
        title={"Continue with Apple"}
        version={"SECONDARY"}
        symbol="apple1"
      />
      <SignButton
        title={"Continue with Google"}
        version={"SECONDARY"}
        symbol="google"
      />
    </View>
  );
}
