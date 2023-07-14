import { TextInput, View, StyleSheet } from "react-native";
import { PageHeading, ProgressButton, NumPad } from "../../src/components";
import { useAuth } from "../../src/context/auth";
import { useRouter } from "expo-router";

const ITEM_SIZE = 40;
const DIGITS = 6;

export default function SignIn() {
  // const { signIn } = useAuth();
  const router = useRouter();
  const onPress = () => {
    router.replace({
      pathname: "/modals/ThankYou",
      params: {
        title: "Success!",
        icon: "lock-open-outline",
        message: "You have logged in successfully!",
        next: "/main",
      },
    });
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"Please enter your passcode"} />
        <NumPad />
      </View>
      <ProgressButton
        // onPress={() => signIn()}
        onPress={onPress}
        backEnable={false}
        enabled={true}
        title={"Log In"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderBottomColor: "#00ffc5",
    borderBottomWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 30,
    color: "#0000CC",
  },
});
