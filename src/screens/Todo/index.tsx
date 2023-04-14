import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PersonRepository from "../../databases/repositories/PersonRepository";
import { PersonModel, TodoModel } from "../../models";
import { Header, PrimaryButton } from "../../components";
import { realm } from "../../databases";
import { useRenderScreen } from "../../hooks/RenderScreen";
import TodoRepository from "../../databases/repositories/TodoRepository";
import generateUUID from "../../utils/generateUUID";
import { TodoSchema } from "../../databases/schemas";

function TodoScreen() {
  const [person, setPerson] = useState<PersonModel | undefined>(undefined);
  const [taskUuid, setTaskUuid] = useState<string | undefined>(undefined);
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [tasks, setTasks] = useState<TodoModel[]>([]);

  const { setCurrentScreen } = useRenderScreen();

  function logout() {
    realm.write(() => {
      realm.deleteAll();
    });
    setCurrentScreen("signin");
  }

  function saveTodo() {
    if (!taskDescription) return;
    if (!person) return;

    TodoRepository.create({
      uuid: !taskUuid ? generateUUID() : taskUuid,
      description: taskDescription,
      owners: [person],
      status: 0,
    });
    setTaskDescription("");
    fetchTasks(person);
  }

  function fetchTasks(currentPerson: PersonModel) {
    const foundTasks = realm
      .objects(TodoSchema.schema.name)
      .filtered(`owners.uuid == '${currentPerson.uuid}'`)
      .sorted("createdAt", true);
    setTasks(foundTasks.toJSON() as unknown as TodoModel[]);
  }

  function fetchPerson() {
    const people = PersonRepository.getAll();
    console.log(people);
    const currentPerson = people[0];
    setPerson(currentPerson);
    fetchTasks(currentPerson);
  }

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <View style={styles.container}>
      <Header rightOnPress={logout} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="description"
          onChangeText={setTaskDescription}
          value={taskDescription}
        />
        <PrimaryButton onPress={saveTodo} />
      </View>
      {taskUuid && (
        <View style={styles.inputContainer}>
          <Text>{taskUuid}</Text>
        </View>
      )}

      <FlatList<TodoModel>
        keyExtractor={(item) => String(item.uuid)}
        data={tasks}
        renderItem={({ item: task }) => (
          <TouchableOpacity
            key={task.uuid}
            style={{ padding: 3, margin: 7 }}
            onPress={() => {
              setTaskDescription(task.description);
              setTaskUuid(task.uuid);
            }}
          >
            <Text>{task.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9FDF6",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 7,
  },
  input: {
    flex: 1,
    borderRadius: 9,
    borderWidth: 0.9,
    borderColor: "#091A7A",
    padding: 5,
  },
});

export default TodoScreen;
