import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface RadioButtonProps {
  selected: boolean;
  //   onPress: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  selected,
  //   onPress,
}) => {
  return (
    <TouchableOpacity style={styles.radioButton}>
      {/* onPress={() => onPress(value)} */}
      <View style={[styles.circle, selected && styles.selectedCircle]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    backgroundColor: "#1E6F9F",
  },
});

export default RadioButton;
