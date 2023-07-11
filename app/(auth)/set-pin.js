import { View, Text, StyleSheet } from "react-native";
import { PageHeading, ProgressButton } from "../../src/components";
import { useRouter } from "expo-router";
import { TextInput } from "react-native";

const ITEM_SIZE = 50;
const DIGITS = 4;

export default function SetPIN() {
  const router = useRouter();
  const onPress = () => {
    router.push("/sign-in");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <PageHeading title={"Set your login PIN"} />
        <View
          style={{
            width: "70%",
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
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
