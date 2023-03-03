import React from "react";
import { ScrollView, StatusBar, View, useWindowDimensions } from "react-native";
import LoanScreen1 from "../src/screens/loan/Screen_1";
import LoanScreen2 from "../src/screens/loan/Screen_2";
import { ProgressButton } from "../src/components";

export default function Page() {
  const { width } = useWindowDimensions();
  const ref = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const pageForward = () => (
    ref.current?.scrollTo({ x: index + width, animated: true }),
    setIndex(index + width)
  );
  const pageBack = () => (
    ref.current?.scrollTo({ x: index - width, animated: true }),
    setIndex(index - width)
  );
  return (
    <View style={{ backgroundColor: "white", flex: 1, width }}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView horizontal pagingEnabled ref={ref}>
        <LoanScreen1 width={width} />
        <LoanScreen2 width={width} />
        <LoanScreen1 width={width} />
      </ScrollView>
      <ProgressButton pageBack={pageBack} pageForward={pageForward} />
    </View>
  );
}
