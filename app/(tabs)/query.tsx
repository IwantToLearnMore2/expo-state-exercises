import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

const queryClient = new QueryClient();

function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => 
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
  });

  if(isLoading) return <Text>Loading...</Text>;

  return (
    <View style={{ padding: 20 }}>
      {data.map((user:any) => <Text key={user.id}>{user.name}</Text>)}
    </View>
  );
}

export default function QueryScreen() {
  return <QueryClientProvider client={queryClient}><Users/></QueryClientProvider>;
}
