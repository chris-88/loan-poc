import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { ProgressButton, PageHeading, Title } from "../../src/components";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function LoanPage5() {
  const router = useRouter();
  const onPress = () => {
    router.push("/loan/page6");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <PageHeading title={"Loan calculation"} />
          <Title title={"Based on what you've told us:"} />
        </View>
        <View style={{ backgroundColor: "#efefef", padding: 20 }}>
          <Title title={"Cost of credit"} />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.2)",
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans_400Regular",
                fontSize: 24,
                paddingVertical: 12,
              }}
            >
              €270
            </Text>
          </View>
          <Title title={"Total repayment amount"} />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.2)",
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans_400Regular",
                fontSize: 24,
                paddingVertical: 12,
              }}
            >
              €6,270
            </Text>
          </View>
          <Title title={"Variable Annual Percentage Rate"} />
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans_400Regular",
                fontSize: 24,
                paddingVertical: 12,
              }}
            >
              8.50%
            </Text>
          </View>
          <Text style={{ fontFamily: "OpenSans_400Regular", opacity: 0.6 }}>
            This calculation is a guideline only and in not a loan offer.
          </Text>
        </View>
      </View>
      <ProgressButton onPress={onPress} backEnable={true} enabled={true} />
    </View>
  );
}
