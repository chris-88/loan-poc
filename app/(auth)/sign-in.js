import { TextInput, View, StyleSheet } from "react-native";
import { PageHeading, ProgressButton } from "../../src/components";
import { useAuth } from "../../src/context/auth";

const ITEM_SIZE = 40;
const DIGITS = 6;

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"Please enter your passcode"} />
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 30,
          }}
        >
          {[...new Array(DIGITS)].map((item, index) => (
            <View style={styles.container}>
              <TextInput
                key={index}
                style={styles.input}
                // secureTextEntry={true}
                maxLength={1}
                contextMenuHidden
                selectTextOnFocus
                // editable={!disabled}
                keyboardType={"decimal-pad"}
              />
            </View>
          ))}
        </View>
      </View>
      <ProgressButton
        onPress={() => signIn()}
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
