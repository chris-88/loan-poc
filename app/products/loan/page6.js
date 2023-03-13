import { View } from "react-native";
import {
  PageHeading,
  Title,
  Dropdown,
  SubTitle,
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

export default function LoanPage6() {
  const router = useRouter();
  const onPress = () => {
    router.push("/products/loan/page7");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"Tell us about yourself"} />
        <Title title={"Marital Status"} />
        <Dropdown
          placeholder={"Please select"}
          items={MaritalItems}
          zIndex={3}
        />
        <Title title={"Living Arrangements"} />
        <Dropdown
          placeholder={"Please select"}
          items={LivingItems}
          zIndex={2}
        />
        <Title title={"Number of dependants"} />
        <SubTitle
          text={"Dependants are people that you support financially."}
        />
        <Dropdown
          placeholder={"Please select"}
          items={DependItems}
          zIndex={1}
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
