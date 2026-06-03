import PokeBallIcon from "../../assets/images/pokeballicon.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      }}
    >

      <Tabs.Screen name="battle" options={{
        title: "Battle",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="crosshairs" size={size} color={color} />
        ),
        }} />

      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="home" size={size} color={color} />
        ),
        }} />

      <Tabs.Screen name="pokemon" options={{
        title: "Pokemon",
        tabBarIcon: ({ focused }) => (
          <Image 
            source={PokeBallIcon}
            style={{
              width: 30,
              height: 30,
            }}
          />
        ),
        }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "gold",
    height: 50,
    borderTopWidth: 2,
    borderTopColor: "black",
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
