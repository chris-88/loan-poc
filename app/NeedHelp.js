import { View, Text } from "react-native";
import { PageHeading, Title, TextBlock } from "../src/components";

export default function NeedHelp() {
  return (
    <View
      style={{
        flex: 1,
        // padding: 16,
      }}
    >
      <PageHeading title={"Got a question or need help?"} />
      <View style={{ margin: 32, padding: 16, backgroundColor: "#ccc" }}>
        <Title title={"Call us on"} />
        <TextBlock text={"0818 200 469"} />
        <Title title={"Office hours"} />
        <TextBlock text={"Monday to Friday"} />
        <TextBlock text={"9am to 5pm"} />
      </View>
    </View>
  );
}
