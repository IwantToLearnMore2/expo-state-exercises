import { Button, Text, View } from "react-native";
import { create } from "zustand";

const useStore = create((set:any)=>({
  count: 0,
  increment: ()=>set((state:any)=>({count: state.count+1})),
  decrement: ()=>set((state:any)=>({count: state.count-1}))
}));

export default function ZustandScreen(){
  const {count, increment, decrement} = useStore();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <Button title="+" onPress={increment}/>
      <Button title="-" onPress={decrement}/>
    </View>
  );
}
