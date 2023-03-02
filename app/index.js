import { StatusBar, View } from "react-native";
import LoanScreen1 from "../src/screens/loan/Screen_1";

export default function Page() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <LoanScreen1 />
    </View>
  );
}
