import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import React, { useState, useEffect } from "react";
import { Task } from "../../Components/Tasks";
import CustomCard from "../../Components/TaskCard";
import Icon from "react-native-vector-icons/FontAwesome5";
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

interface Task {
  id: string;
  description: string;
  selected: boolean;
}
export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [createdTasks, setCreatedTasks] = useState("0");
  const [doneTasks, setDoneTasks] = useState<number>(0);

  let taskObj = {
    id: createdTasks,
  };

  useEffect(() => {
    setCreatedTasks(tasks.length.toString());
  }, [tasks]);

  function handleTaskAdd() {
    // if (tasks.includes(taskName)) {
    //   Alert.alert("Task existente.", "Já existe uma task com esse nome.");
    // } else {
    const newTask: Task = {
      id: createdTasks,
      description: taskName,
      selected: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    // }
    setTaskName("");
  }

  const handleSelect = (id: string) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          const isSelected = !task.selected;
          setDoneTasks((prevDoneTasks) =>
            isSelected ? prevDoneTasks + 1 : prevDoneTasks - 1
          );
          return { ...task, selected: isSelected };
        }
        return task;
      });
    });
  };

  function handleTaskRemove(description: String) {
    Alert.alert("Remover", `Deseja remover a task "${description}"?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.description != description)
          ),
      },
      {
        text: "Não",
      },
    ]);
    console.log(`remove acionado ${description}`);
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
      {/* <View> */}
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
          <Text style={styles.text_total_tasks_number}>{doneTasks}</Text>
        </View>
      </View>
      <View style={styles.task_list_view}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <>
              <View style={styles.view_from_clipboard_empty_list}>
                <Icon name="clipboard" size={56} color="gray" />
              </View>
              <Text style={styles.text_from_empty_list_upper}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.text_from_empty_list_down}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </>
          )}
          renderItem={({ item }) => (
            <CustomCard
              key={item.id}
              description={item.description}
              selected={item.selected}
              onSelect={() => handleSelect(item.id)}
              onRemove={() => handleTaskRemove(item.description)}
            />
          )}
        />
        {/* </View> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
