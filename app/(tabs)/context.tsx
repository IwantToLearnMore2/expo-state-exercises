import { createContext, useContext, useState } from "react";
import { Button, Text, View } from "react-native";

const ThemeContext = createContext<any>(null);

function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, backgroundColor: theme === "light" ? "#fff" : "#000", padding: 20 }}>
      <Text style={{ color: theme === "light" ? "#000" : "#fff", fontSize: 22 }}>
        Current Theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

export default function ContextScreen() {
  return <ThemeProvider><ThemeContent /></ThemeProvider>;
}
