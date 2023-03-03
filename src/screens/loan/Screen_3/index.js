import { View } from "react-native";
import {
  PageHeading,
  Title,
  ToggleButton,
  TextBlock,
} from "../../../components";

export default function LoanScreen3({ width }) {
  return (
    <View style={{ padding: 16, width }}>
      <PageHeading title={"Your repayment options"} />
      <Title title={"How often do you want to make repayments?"} />
      <View style={{ flexDirection: "row", paddingTop: 14 }}>
        <ToggleButton title={"Monthly"} />
        <View style={{ width: 12 }} />
        <ToggleButton title={"Weekly"} />
      </View>
      <View style={{ height: 25 }} />
      <Title title={"Do you need to defer any payments?"} />
      <View style={{ height: 12 }} />
      <TextBlock
        text={
          "Deferring payments would mean paying more interest over your loan term."
        }
      />
      <View style={{ flexDirection: "row" }}>
        <ToggleButton title={"Yes"} />
        <View style={{ width: 10 }} />
        <ToggleButton title={"No"} />
      </View>
      <View style={{ height: 25 }} />
      <Title title={"Which repayment option might work best for you?"} />
    </View>
  );
}
