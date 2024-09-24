import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected, onPress }) => {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      {/* onPress={() => onPress(value)} */}
      <View style={[styles.circle, selected && styles.selectedCircle]}>
        {selected && <Icon name="check" size={15} color="white" />}
      </View>
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
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
  },
  radioButton: {
    marginRight: 10,
  },
});

export default RadioButton;
