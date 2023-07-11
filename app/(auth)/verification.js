import { View, Text } from "react-native";
import { PageHeading, ProgressButton } from "../../src/components";
import { useRouter } from "expo-router";

export default function Verification() {
  const router = useRouter();
  const onPress = () => {
    router.push("/set-pin");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <PageHeading title={"Verify your phone number"} />
        <Text>Phone verification</Text>
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
