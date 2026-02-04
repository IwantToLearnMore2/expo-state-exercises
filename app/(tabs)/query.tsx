import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

const queryClient = new QueryClient();

function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
  });

  if (isLoading)
    return <Text style={{ color: "#000", padding: 20 }}>Loading...</Text>;

  return (
    <View style={{ padding: 20 }}>
      {data.map((user: any) => (
        <Text key={user.id} style={{ color: "#000", marginBottom: 6 }}>
          {user.name}
        </Text>
      ))}
    </View>
  );
}

export default function QueryScreen() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}> {/* White background */}
        <Users />
      </View>
    </QueryClientProvider>
  );
}
