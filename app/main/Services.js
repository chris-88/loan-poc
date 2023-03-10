import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Title } from "../../src/components";

export default function profile() {
  const router = useRouter();
  return (
    <ScrollView style={styles.root}>
      <Title title={"Manage accounts"} />
      <TouchableOpacity style={styles.button}>
        <AntDesign name="home" size={24} color="#0000CC" />
        <Text style={styles.text}>Change address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="pdffile1" size={24} color="#0000CC" />
        <Text style={styles.text}>Manage statements</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="add-circle" size={24} color="#0000CC" />
        <Text style={styles.text}>Add account/policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="send-to-mobile" size={24} color="#0000CC" />
        <Text style={styles.text}>Manage Pay-to-Mobile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name="file-percent-outline"
          size={24}
          color="#0000CC"
        />
        <Text style={styles.text}>Order interest certificate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="filetext1" size={24} color="#0000CC" />
        <Text style={styles.text}>Order balance certificate</Text>
      </TouchableOpacity>

      <Title title={"Need Help?"} />
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="location-pin" size={24} color="#0000CC" />
        <Text style={styles.text}>ATM/Branch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="customerservice" size={24} color="#0000CC" />
        <Text style={styles.text}>Contact us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="questioncircleo" size={24} color="#0000CC" />
        <Text style={styles.text}>FAQs</Text>
      </TouchableOpacity>

      <Title title={"Looking for more services?"} />
      <TouchableOpacity style={styles.button}>
        <AntDesign name="message1" size={24} color="#0000CC" />
        <Text style={styles.text}>Send us a message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="form" size={24} color="#0000CC" />
        <Text style={styles.text}>More services</Text>
      </TouchableOpacity>
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
  button: {
    alignItems: "center",
    padding: 12,
    backgroundColor: "white",
    marginTop: 8,
    flexDirection: "row",
  },
  text: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginLeft: 16,
  },
  card: {
    height: "40%",
    aspectRatio: 1,
    resizeMode: "contain",
    margin: 16,
    alignSelf: "center",
  },
});
