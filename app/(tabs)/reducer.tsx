import { useReducer } from "react";
import { Button, Text, View } from "react-native";

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export default function ReducerScreen() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      {/* White background */}
      <Text style={{ fontSize: 22, color: "#000", marginBottom: 10 }}>
        Counter (useReducer)
      </Text>

      <Text style={{ fontSize: 40, color: "#000", marginBottom: 20 }}>
        {count}
      </Text>

      <View style={{ gap: 10 }}>
        <Button
          title="Increment"
          onPress={() => dispatch({ type: "increment" })}
        />
        <Button
          title="Decrement"
          onPress={() => dispatch({ type: "decrement" })}
        />
      </View>
    </View>
  );
}
