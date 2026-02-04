import { Button, Text, View } from "react-native";
import { create } from "zustand";

const useStore = create((set: any) => ({
  count: 0,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
}));

export default function ZustandScreen() {
  const { count, increment, decrement } = useStore();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      {/* White background */}
      <Text style={{ fontSize: 30, color: "#000", marginBottom: 20 }}>
        {count}
      </Text>

      <View style={{ gap: 10 }}>
        <Button title="+" onPress={increment} />
        <Button title="-" onPress={decrement} />
      </View>
    </View>
  );
}
