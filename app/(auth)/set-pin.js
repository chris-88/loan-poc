import { View, Text, StyleSheet } from "react-native";
import { PageHeading, ProgressButton } from "../../src/components";
import { useRouter } from "expo-router";
import { TextInput } from "react-native";

const ITEM_SIZE = 40;
const DIGITS = 6;

export default function SetPIN() {
  const router = useRouter();
  const onPress = () => {
    router.push("/sign-in");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"Please create a passcode"} />
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
        onPress={onPress}
        backEnable={true}
        enabled={true}
        title={"Next"}
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
    fontSize: 24,
    color: "#0000CC",
  },
});
