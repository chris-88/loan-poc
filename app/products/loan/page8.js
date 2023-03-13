import { View, Text, ScrollView } from "react-native";
import {
  PageHeading,
  TextBlock,
  ProgressButton,
} from "../../../src/components";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function LoanPage8() {
  const router = useRouter();
  const onPress = () => {
    router.replace("/main/Apply");
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white", flex: 1 }}
    >
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"What you can borrow"} />
        <TextBlock
          text={
            "Based on what you told us, we estimate that your new loan will come to:"
          }
        />
        <View
          style={{
            borderColor: "blue",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 16,
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans_700Bold",
              fontSize: 34,
              paddingBottom: 20,
            }}
          >
            €6,000
          </Text>
          <Text style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}>
            for car purchase
          </Text>
        </View>
        <Text style={{ fontFamily: "OpenSans_400Regular", fontSize: 20 }}>
          At a glance
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%", paddingVertical: 16 }}>
            <Text
              style={{
                fontFamily: "OpenSans_600SemiBold",
                fontSize: 18,
              }}
            >
              1 year
            </Text>
            <Text style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}>
              Loan term
            </Text>
          </View>
          <View style={{ width: "50%", paddingVertical: 16 }}>
            <Text
              style={{
                fontFamily: "OpenSans_600SemiBold",
                fontSize: 18,
              }}
            >
              €270
            </Text>
            <Text style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}>
              Total cost of credit
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%", paddingVertical: 16 }}>
            <Text
              style={{
                fontFamily: "OpenSans_600SemiBold",
                fontSize: 18,
              }}
            >
              €522.50
            </Text>
            <Text style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}>
              Estimated monthly repayment
            </Text>
          </View>
          <View style={{ width: "50%", paddingVertical: 16 }}>
            <Text
              style={{
                fontFamily: "OpenSans_600SemiBold",
                fontSize: 18,
              }}
            >
              €6,270
            </Text>
            <Text style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}>
              Total Repayment Amount
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%", paddingVertical: 16 }}>
            <Text
              style={{
                fontFamily: "OpenSans_600SemiBold",
                fontSize: 18,
              }}
            >
              8.50%
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans_400Regular",
                fontSize: 16,
              }}
            >
              Variable Annual Percentage Rate
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "blue",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            marginVertical: 16,
          }}
        >
          <AntDesign
            name="infocirlceo"
            size={24}
            color="black"
            style={{ paddingRight: 12 }}
          />
          <Text
            style={{
              fontFamily: "OpenSans_400Regular",
              fontSize: 14,
            }}
          >
            This estimate is subject to a full credit and affordability
            assessment
          </Text>
        </View>
      </View>
      <ProgressButton
        backEnable={true}
        enabled={true}
        title={"Start application"}
        style={"SECONDARY"}
        onPress={onPress}
      />
    </ScrollView>
  );
}
