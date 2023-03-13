import { View } from "react-native";
import {
  PageHeading,
  Title,
  ToggleButton,
  TextBlock,
  ProgressButton,
} from "../../../src/components";
import { useRouter } from "expo-router";

export default function LoanPage3() {
  const router = useRouter();
  const onPress = () => {
    router.push("/products/loan/page4");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"Your repayment options"} />
        <Title title={"How often do you want to make repayments?"} />
        <ToggleButton option1={"Monthly"} option2={"Weekly"} />
        <Title title={"Do you need to defer any payments?"} />
        <TextBlock
          text={
            "Deferring payments would mean paying more interest over your loan term."
          }
        />
        <ToggleButton option1={"Yes"} option2={"No"} />
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
