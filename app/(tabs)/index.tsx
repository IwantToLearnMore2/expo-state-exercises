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
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}> {/* White background */}
      <Text style={{ fontSize: 22, marginBottom: 10, color: "#000" }}>Todo List (UseState)</Text> {/* Black text for contrast */}

      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Enter task"
        placeholderTextColor="#888" // lighter gray placeholder
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderColor: "#ccc", color: "#000" }}
      />

      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => removeTask(index)}>
            <Text style={{ marginTop: 10, color: "#000" }}>{item} ❌</Text> {/* Black text */}
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}
