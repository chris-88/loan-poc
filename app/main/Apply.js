import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const Item = ({ name, img, route }) => {
  return (
    <TouchableOpacity
      onPress={route}
      style={{
        alignItems: "center",
        padding: 16,
        backgroundColor: "#efefef",
        marginBottom: 16,
        flexDirection: "row",
        borderRadius: 9,
      }}
    >
      <Image
        source={img}
        style={{
          height: 80,
          width: 80,
          resizeMode: "contain",
          marginRight: 16,
        }}
      />
      <Text
        style={{
          fontFamily: "OpenSans_600SemiBold",
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default function Apply() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <Item
        name={"Current account"}
        img={require("../../src/assets/icons/current-accounts-icon.png")}
        route={() => router.push("/products/CurrentAccount")}
      />
      <Item
        name={"Personal loan"}
        img={require("../../src/assets/icons/loans-icon.png")}
        route={() => router.replace("/products/loan/")}
      />
      <Item
        name={"Borrowing"}
        img={require("../../src/assets/icons/loans-icon.png")}
        route={() => router.push("/products/savvy_calc/")}
      />
      <Item
        name={"Mortgage"}
        img={require("../../src/assets/icons/mortgages-icon.png")}
        route={() => router.push("/products/Mortgages")}
      />
      <Item
        name={"Credit card"}
        img={require("../../src/assets/icons/credit-cards-icon.png")}
        route={() => router.push("/products/CreditCards")}
      />
    </View>
  );
}
