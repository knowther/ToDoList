import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import React, { useState, useEffect } from "react";
import { Task } from "../../Components/Tasks";
import CustomCard from "../../Components/TaskCard";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  Button,
} from "react-native";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");
  const [createdTasks, setCreatedTasks] = useState("0");

  useEffect(() => {
    setCreatedTasks(tasks.length.toString());
  }, [tasks]);

  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      Alert.alert("Task existente.", "Já existe uma task com esse nome.");
    } else {
      setTasks((prevState) => [...prevState, taskName]);
    }
    setTaskName("");
  }

  function handleTaskRemove(name: String) {
    Alert.alert("Remover", `Deseja remover o participante "${name}"?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((participant) => participant != name)
          ),
      },
      {
        text: "Não",
      },
    ]);
    console.log(`remove acionado ${name}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_view}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>
      {/* <Text style={styles.headerText}>🚀TODO</Text> */}

      <View style={styles.add_task_view}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#888888"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
          style={styles.input}
        ></TextInput>
        <TouchableOpacity
          style={styles.touchable_debug}
          onPress={handleTaskAdd}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.task_view}>
          <View style={styles.view_from_total_tasks_current_status}>
            <Text
              style={[
                styles.text_from_total_tasks,
                styles.text_from_created_tasks,
              ]}
            >
              Criadas
            </Text>
            <View style={styles.view_for_cicle_in_task_status_number}>
              <Text style={styles.text_total_tasks_number}>{createdTasks}</Text>
            </View>
          </View>
          <View style={styles.view_from_total_tasks_current_status}>
            <Text
              style={[
                styles.text_from_total_tasks,
                styles.text_from_completed_tasks,
              ]}
            >
              Concluídas
            </Text>
            <Text style={styles.text_total_tasks_number}>0</Text>
          </View>
        </View>
        <View style={styles.task_list_view}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item}
            ListEmptyComponent={() => (
              <Text>Adicione participantes. A lista está vazia.</Text>
            )}
            renderItem={({ item }) => (
              <CustomCard
                key={item}
                description={item}
                // onRemove={() => handleTaskRemove(item)}
              />
            )}
          />
          {/* <CustomCard
            title="a"
            description="loren ipson testando uma texto um pouco maior para ver como se comporta no card."
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
          ></CustomCard> */}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
