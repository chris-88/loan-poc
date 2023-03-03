import { TextInput, View } from "react-native";
import {
  PageHeading,
  Title,
  TextBlock,
  Dropdown,
  EuroInput,
} from "../../../components";

const Items = [
  { id: 0, title: "Car loan" },
  { id: 1, title: "Green car loan" },
  { id: 2, title: "Home improvements" },
  { id: 3, title: "Green home improvements" },
  { id: 4, title: "Wedding" },
  { id: 5, title: "Education expenses" },
  { id: 6, title: "Graduate" },
];

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
      <Dropdown placeholder={"Please select"} items={Items} />
      <View style={{ marginTop: 20 }} />
      <Title title={"How much do you want to borrow?"} />
      <EuroInput />
    </View>
  );
}
