import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";

const DATA = [
  {
    id: 1,
    title: "Current Account",
    number: "~ 1234",
    balance: "€2,639.74",
  },
  {
    id: 2,
    title: "Aer Card",
    number: "~ 5678",
    balance: "€2,711.68",
  },
  {
    id: 3,
    title: "Super Saver",
    number: "~ 9874",
    balance: "€14,895.85",
  },
  {
    id: 4,
    title: "Car Loan",
    number: "~ 5612",
    balance: "€4,123.10",
  },
  {
    id: 5,
    title: "Demand Deposit",
    number: "~ 0321",
    balance: "€2,030.21",
  },
];

function Item({ account, number, amount, id }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/modals/AccountDetails",
          params: {
            account: account,
            number: number,
            amount: amount,
          },
        })
      }
      style={{
        alignItems: "center",
        padding: 16,
        backgroundColor: "#efefef",
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 20,
            color: "black",
            textAlign: "center",
          }}
        >
          {account}
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans_400Regular",
            fontSize: 14,
            color: "gray",
          }}
        >
          {number}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "OpenSans_400Regular",
          fontSize: 24,
          color: "#0000cc",
        }}
      >
        {amount}
      </Text>
    </TouchableOpacity>
  );
}

export default function Accounts() {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            account={item.title}
            number={item.number}
            amount={item.balance}
            id={item.id}
          />
        )}
      />
    </View>
  );
}
