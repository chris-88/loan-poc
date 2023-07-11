import { View, TextInput } from "react-native";
import {
  EuroInput,
  Header,
  PageHeading,
  ProgressButton,
  TextBlock,
  Title,
} from "../../../src/components";
import { useRouter } from "expo-router";

export default function Savvy2() {
  const router = useRouter();
  const onPress = () => {
    router.push("/products/savvy_calc/page3");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <View style={{ flex: 1, padding: 16 }}>
        <PageHeading title={"Tell us about your needs"} />
        <Title title={"Got it. How much would you like to borrow?"} />
        <TextBlock text={"Enter a value between €500 to €25,000"} />
        <EuroInput />
        <Title title={"Over how many months?"} />
        {/* <TextBlock text={"Enter a value between 12 and 60"} /> */}
        <TextInput
          style={{
            fontFamily: "OpenSans_400Regular",
            fontSize: 16,
            padding: 12,
            marginVertical: 16,
            borderColor: "#dcdcdc",
            borderWidth: 1,
          }}
          keyboardType="numbers-and-punctuation"
          placeholder="Enter a value between 12 and 60"
        />
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
