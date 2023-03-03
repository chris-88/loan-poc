import { View } from "react-native";
import { useRouter } from "expo-router";
import {
  PageHeading,
  Title,
  ProgressButton,
  ToggleButton,
} from "../../../components";

export default function LoanScreen1({ width }) {
  const router = useRouter();
  const onPress = () => {
    router.push("/loan/page_2");
  };
  return (
    <View style={{ padding: 16, width }}>
      <PageHeading title={"What kind of loan do you need?"} />
      <Title title={"Choose a loan"} />
      <View style={{ flexDirection: "row", paddingTop: 14 }}>
        <ToggleButton title={"New loan"} />
        <View style={{ width: 10 }} />
        <ToggleButton title={"Top up loan"} />
      </View>
      {/* <ProgressButton title={"Next"} onPress={onPress} /> */}
    </View>
  );
}
