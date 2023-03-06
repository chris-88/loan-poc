import { View } from "react-native";
import {
  PageHeading,
  ProgressButton,
  TextBlock,
  Title,
} from "../src/components";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  const onPress = () => {
    router.push("/loan/page1");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 16 }}>
      <View style={{ flex: 1 }}>
        <PageHeading title={"Welcome to Bank of Ireland"} />
        <Title title={"Introduction"} />
        <TextBlock text={"This is a POC for the EDB Personal Loans journey."} />
        <TextBlock
          text={
            "The objective is to prove the concept that DCOE can provide an in app journey, which utilises the B365 id to identify users, and provide them with immediate feedback on their loan request based on backend eligibility models."
          }
        />
      </View>
      <ProgressButton onPress={onPress} backEnable={false} enabled={true} />
    </View>
  );
}
