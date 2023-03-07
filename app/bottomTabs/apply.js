import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const Item = ({ name, img, route }) => {
  return (
    <TouchableOpacity
      onPress={route}
      style={{
        alignItems: "center",
        padding: 16,
        backgroundColor: "white",
        marginBottom: 16,
        flexDirection: "row",
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

export default function apply() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <Item
        name={"Current account"}
        img={require("../../src/assets/icons/current-accounts-icon.png")}
        route={() => router.push("/loan/")}
      />
      <Item
        name={"Personal loan"}
        img={require("../../src/assets/icons/loans-icon.png")}
        route={() => router.push("/loan/")}
      />
      <Item
        name={"Mortgage"}
        img={require("../../src/assets/icons/mortgages-icon.png")}
        route={() => router.push("/loan/")}
      />
      <Item
        name={"Credit card"}
        img={require("../../src/assets/icons/credit-cards-icon.png")}
        route={() => router.push("/loan/")}
      />
    </View>
  );
}
