import { useReducer } from "react";
import { Button, Text, View } from "react-native";

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment": return state + 1;
    case "decrement": return state - 1;
    default: return state;
  }
}

export default function ReducerScreen() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Counter (useReducer)</Text>
      <Text style={{ fontSize: 40 }}>{count}</Text>

      <Button title="Increment" onPress={() => dispatch({ type: "increment" })} />
      <Button title="Decrement" onPress={() => dispatch({ type: "decrement" })} />
    </View>
  );
}
