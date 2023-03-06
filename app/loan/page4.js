import { View, FlatList, Text } from "react-native";
import { ProgressButton } from "../../src/components";
import { PageHeading, Title } from "../../src/components";
import { useRouter } from "expo-router";

export default function LoanPage4() {
  const router = useRouter();
  const onPress = () => {
    router.push("/loan/");
  };
  const data = [
    { id: 1, amount: 522.5 },
    { id: 2, amount: 271.92 },
    { id: 3, amount: 188.59 },
    { id: 4, amount: 147.06 },
    { id: 5, amount: 122.25 },
  ];
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16 }}>
        <PageHeading title={"Your repayment options"} />
        <Title title={"Which repayment option might work best for you?"} />
        <FlatList
          style={{ paddingVertical: 12 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text
              style={{
                padding: 12,
                marginTop: 6,
                borderWidth: 1,
                borderColor: "#ccc",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              €{item.amount} per month over {item.id} years
            </Text>
          )}
        />
        <View>
          <Title title={"Total cost of credit"} />
        </View>
      </View>
      <ProgressButton onPress={onPress} backEnable={true} />
    </View>
  );
}
