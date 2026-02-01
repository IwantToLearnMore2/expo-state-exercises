import { useState } from "react";
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TodoScreen() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Todo List (useState)</Text>

      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Enter task"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => removeTask(index)}>
            <Text style={{ marginTop: 10 }}>{item} ❌</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}
