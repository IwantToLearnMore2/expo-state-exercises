import { Button, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

// --- Redux setup ---
interface State {
  count: number;
}

const reducer = (state: State = { count: 0 }, action: any): State => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

// --- Counter component ---
function Counter() {
  const count = useSelector((state: State) => state.count);
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, color: "#000", marginBottom: 20 }}>
        {count}
      </Text>

      <View style={{ gap: 10 }}>
        <Button title="+" onPress={() => dispatch({ type: "INC" })} />
        <Button title="-" onPress={() => dispatch({ type: "DEC" })} />
      </View>
    </View>
  );
}

// --- Screen ---
export default function ReduxScreen() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* White background */}
        <Counter />
      </View>
    </Provider>
  );
}
