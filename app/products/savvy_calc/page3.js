import { View, Text, FlatList } from "react-native";
import {
  Header,
  PageHeading,
  ProgressButton,
  Title,
} from "../../../src/components";
import { useRouter } from "expo-router";

const DATA = [
  { id: 1, title: "Personal Loan" },
  { id: 2, title: "Credit card" },
  { id: 3, title: "Installment plan" },
  { id: 4, title: "Overdraft" },
];

const Item = ({ title, onPress }) => {
  return (
    <View
      onPress={onPress}
      style={{
        margin: 6,
        backgroundColor: "#0000CC",
        width: 250,
        height: 350,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      <View
        style={{
          backgroundColor: "#efefef",
          height: "20%",
          borderTopRightRadius: 25,
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 16,
        }}
      >
        <Text
          style={{
            color: "#0000CC",
            fontFamily: "OpenSans_700Bold",
            fontSize: 24,
            textAlign: "center",
            paddingTop: 3,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
          Cost of credit:
        </Text>
        <Text style={{ color: "white", fontWeight: 400, fontSize: 16 }}>
          €26.60 monthly
        </Text>
        <Text style={{ color: "white", fontWeight: 400, fontSize: 16 }}>
          €880.40 total repayment
        </Text>
        <Text style={{ color: "white", fontWeight: 400, fontSize: 16 }}>
          8.5% APR
        </Text>
      </View>
    </View>
  );
};

export default function Savvy3() {
  const router = useRouter();
  const onPress = () => {
    // router.push("/products/savvy_calc/page3");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <View style={{ flex: 1, padding: 16 }}>
        <PageHeading title={"Your results"} />
        <Title
          title={
            "Eoin, here are some ways we can help you fund your purchase today:"
          }
        />
        <View style={{ marginVertical: 16 }}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Item title={item.title} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
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
