import { StatusBar } from "expo-status-bar";
import CustomCard from "./Components/TaskCard";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./home/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>🚀TODO</Text>

      <View style={styles.add_task_view}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#888888"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.touchable_debug}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.task_view}>
          <View style={styles.view_from_total_tasks_current_status}>
            <Text style={styles.text_from_total_tasks}>Concluídas</Text>
            <Text style={styles.text_from_total_tasks}>0</Text>
          </View>

          <Text style={styles.text_from_total_tasks}>Criadas</Text>
        </View>
        <View style={styles.task_list_view}>
          <CustomCard
            title="a"
            description="TESTANDO"
            buttonText="a"
          ></CustomCard>
          <CustomCard
            title="a"
            description="ATIVIDADE 1"
            buttonText="a"
          ></CustomCard>
          <CustomCard
            title="a"
            description="ATIVIDADE 2"
            buttonText="a"
          ></CustomCard>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
