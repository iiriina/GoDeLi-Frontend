import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import FormDefault from "./FormDefault";

export type FormType = {
  ingredientLabel?: string;
};

const Form = ({ ingredientLabel }: FormType) => {
  return (
    <View style={styles.emailDisabled}>
      <FormDefault
        itemLabel="1/2 kg. de Brocoli"
        formDefaultPosition="absolute"
        formDefaultWidth={346}
        formDefaultTop={0}
        formDefaultLeft={0}
        formBackgroundColor="#fff"
        formBorderStyle="solid"
        formBorderColor="#afafaf"
        formBorderWidth={1}
        placeholderColor="#4c4c4c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailDisabled: {
    alignSelf: "stretch",
    height: 56,
    marginTop: 10,
  },
});

export default Form;
