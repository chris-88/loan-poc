import { View } from "react-native";
import {
  PageHeading,
  Title,
  ToggleButton,
  ProgressButton,
} from "../../../src/components";
import { useRouter } from "expo-router";

export default function LoanPage1() {
  const router = useRouter();
  const onPress = () => {
    router.push("/products/loan/page2");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"What kind of loan do you need?"} />
        <Title title={"Choose a loan"} />
        <ToggleButton option1={"New loan"} option2={"Top up loan"} />
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
