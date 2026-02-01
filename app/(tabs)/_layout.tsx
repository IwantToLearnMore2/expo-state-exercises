import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,  // shows the top header
        tabBarActiveTintColor: "#4B9CD3", // active tab color
      }}
    >
      {/* Files in (tabs)/ automatically become tabs */}
    </Tabs>
  );
}
