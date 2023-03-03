import { Text, TextInput, View } from "react-native";
import {
  PageHeading,
  Title,
  ProgressButton,
  ToggleButton,
  TextBlock,
  Dropdown,
} from "../../../components";

export default function LoanScreen2({ width }) {
  return (
    <View style={{ padding: 16, width }}>
      <PageHeading title={"Get a quick quote"} />
      <TextBlock
        text={
          "Find out how much you might be able to borrow before you apply - this won't affect your credit rating"
        }
      />
      <Title title={"What is the purpose of your loan?"} />
      <Dropdown placeholder={"Please select"} />
      <View style={{ marginTop: 20 }} />
      <Title title={"How much do you want to borrow?"} />
      <View
        style={{
          marginTop: 12,
          padding: 12,
          borderColor: "#dcdcdc",
          borderWidth: 1,
        }}
      >
        <TextInput
          value="Please enter"
          style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}
        />
      </View>
    </View>
  );
}