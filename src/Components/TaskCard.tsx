import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
import RadioButton from "./RadioButton";

interface CardProps {
  description: string;
  //   onButtonPress: () => void;
}

const CustomCard: React.FC<CardProps> = ({ description }) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.content}>
        <RadioButton selected={false}></RadioButton>
        <View style={styles.textContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 327,
    height: 64,
    backgroundColor: "#262626",
    borderColor: "#333333",
    borderRadius: 5,
    borderWidth: 0.2,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 2,
  },
  description: {
    // marginVertical: 10,
    fontSize: 14,
    color: "#fff",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

export default CustomCard;
