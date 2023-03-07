import { View, Text, SafeAreaView } from "react-native";
import { PageHeading } from "../../src/components";
import { WebView } from "react-native-webview";

export default function NeedHelp() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ height: 35, backgroundColor: "#000066" }} />
      <WebView
        source={{
          uri: "https://digital.bankofireland.com/current-accounts/personal-current-account/",
          // uri: "https://www.mortgageapplicationservice.ie/dist/ROID/customer/eligibilityQuestions",
        }}
      />
    </View>
  );
}
