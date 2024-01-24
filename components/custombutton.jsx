import React from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const CustomButton = ({ label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        mode="contained"
        onPress={onPress}
        style={styles.button}
      >
        {label}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 50,
    width: 150,
    height: 50,
  },
});

export default CustomButton;
