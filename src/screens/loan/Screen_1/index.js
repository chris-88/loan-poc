import { Text, View } from "react-native";
import styles from "./styles";
import {
  PageHeading,
  Title,
  ProgressButton,
  Selector,
} from "../../../components";

export default function LoanScreen1() {
  return (
    <View style={styles.container}>
      <PageHeading title={"What kind of loan do you need?"} />
      <Title title={"Choose a loan"} />
      <Selector />
      <ProgressButton title={"Next"} />
    </View>
  );
}
