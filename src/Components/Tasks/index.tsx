import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: String;
  onRemove: () => void;
};

export function Task({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={onRemove}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}
