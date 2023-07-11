import { Text, View } from "react-native";
import { useSearchParams } from "expo-router";

export default function AccountDetails() {
  const params = useSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#00ffc5",
          width: "100%",
          height: "15%",
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans_600SemiBold",
              fontSize: 26,
              color: "#0000cc",
            }}
          >
            {params.account}
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans_400Regular",
              fontSize: 16,
              color: "gray",
            }}
          >
            {params.number}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "OpenSans_400Regular",
            fontSize: 32,
            color: "gray",
            alignSelf: "flex-end",
          }}
        >
          {params.amount}
        </Text>
      </View>
      <View>
        <Text style={{ padding: 16 }}>
          This will be a list of account transactions
        </Text>
      </View>
    </View>
  );
}
