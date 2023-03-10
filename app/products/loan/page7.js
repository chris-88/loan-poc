import { ScrollView, View } from "react-native";
import {
  PageHeading,
  Title,
  EuroInput,
  ProgressButton,
} from "../../../src/components";
import { useRouter } from "expo-router";

const MaritalItems = [
  { id: 0, title: "Single" },
  { id: 1, title: "Co-habiting" },
  { id: 2, title: "Civil partnership" },
  { id: 3, title: "Married" },
  { id: 4, title: "Divorced/Separated" },
  { id: 5, title: "Widowed" },
];
const LivingItems = [
  { id: 0, title: "Living with parents" },
  { id: 1, title: "Tenant" },
  { id: 2, title: "Homeowner" },
];
const DependItems = [
  { id: 0, title: "1" },
  { id: 1, title: "2" },
  { id: 2, title: "3" },
  { id: 3, title: "4" },
  { id: 4, title: "5" },
  { id: 5, title: "6" },
  { id: 6, title: "7" },
  { id: 7, title: "8" },
  { id: 8, title: "9" },
  { id: 9, title: "10+" },
];

export default function LoanPage7() {
  const router = useRouter();
  const onPress = () => {
    router.push("/products/loan/page8");
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white", flex: 1 }}
    >
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"Tell us about your finances"} />
        <Title title={"Net monthly salary"} />
        <EuroInput />
        <Title title={"Partner's net monthly salary"} />
        <EuroInput />
        <Title title={"Monthly mortgage payments"} />
        <EuroInput />
        <Title title={"Total credit card balance (if applicable)"} />
        <EuroInput />
        <Title title={"Other monthly loan repayments (if applicable)"} />
        <EuroInput />
        <Title
          title={
            "Other monthly loan repayments made jointly with your partner (if applicable)"
          }
        />
        <EuroInput />
      </View>
      <ProgressButton
        onPress={onPress}
        backEnable={true}
        enabled={true}
        title={"Next"}
      />
    </ScrollView>
  );
}
