import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { ProgressButton, PageHeading, Title } from "../../src/components";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function LoanPage4() {
  const router = useRouter();
  const onPress = () => {
    router.push("/loan/page5");
  };
  const [selected, setSelected] = useState(0);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 16, flex: 1 }}>
        <PageHeading title={"Your repayment options"} />
        <Title title={"Which repayment option might work best for you?"} />
        <View style={{ paddingVertical: 12 }}>
          <TouchableOpacity onPress={() => setSelected(1)}>
            <Text
              style={{
                padding: 12,
                marginTop: 6,
                borderWidth: 1,
                borderColor: selected == 1 ? "#000066" : "#ccc",
                backgroundColor: selected == 1 ? "#000066" : "transparent",
                color: selected == 1 ? "white" : "black",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              €522.50 per month over 1 years
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected(2)}>
            <Text
              style={{
                padding: 12,
                marginTop: 6,
                borderWidth: 1,
                borderColor: selected == 2 ? "#000066" : "#ccc",
                backgroundColor: selected == 2 ? "#000066" : "transparent",
                color: selected == 2 ? "white" : "black",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              €271.92 per month over 2 years
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected(3)}>
            <Text
              style={{
                padding: 12,
                marginTop: 6,
                borderWidth: 1,
                borderColor: selected == 3 ? "#000066" : "#ccc",
                backgroundColor: selected == 3 ? "#000066" : "transparent",
                color: selected == 3 ? "white" : "black",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              €188.59 per month over 3 years
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected(4)}>
            <Text
              style={{
                padding: 12,
                marginTop: 6,
                borderWidth: 1,
                borderColor: selected == 4 ? "#000066" : "#ccc",
                backgroundColor: selected == 4 ? "#000066" : "transparent",
                color: selected == 4 ? "white" : "black",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              €147.06 per month over 4 years
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected(5)}>
            <Text
              style={{
                padding: 12,
                marginTop: 6,
                borderWidth: 1,
                borderColor: selected == 5 ? "#000066" : "#ccc",
                backgroundColor: selected == 5 ? "#000066" : "transparent",
                color: selected == 5 ? "white" : "black",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              €122.25 per month over 5 years
            </Text>
          </TouchableOpacity>
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
