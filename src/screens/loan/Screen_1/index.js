import { View } from "react-native";
import { PageHeading, Title, ToggleButton } from "../../../components";

export default function LoanScreen1({ width }) {
  return (
    <View style={{ padding: 16, width }}>
      <PageHeading title={"What kind of loan do you need?"} />
      <Title title={"Choose a loan"} />
      <View style={{ flexDirection: "row", paddingTop: 14 }}>
        <ToggleButton title={"New loan"} />
        <View style={{ width: 10 }} />
        <ToggleButton title={"Top up loan"} />
      </View>
    </View>
  );
}
