import { View, TextInput } from "react-native";
import { PageHeading, ProgressButton } from "../../src/components";
import { useRouter } from "expo-router";

const CustomInput = ({ placeholder, password }) => {
  return (
    <View
      style={{
        marginTop: 16,
        padding: 16,
        borderColor: "#dcdcdc",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#cccccc"
        style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}
      />
    </View>
  );
};

export default function SignUp() {
  const router = useRouter();
  const onPress = () => {
    router.push("/verification");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <PageHeading title={"Sign up"} />
        <CustomInput placeholder={"First name"} />
        <CustomInput placeholder={"Last name"} />
        <CustomInput placeholder={"Phone number"} />
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
