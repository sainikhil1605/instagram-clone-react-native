import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Activity from "./screens/Activity";
import Feed from "./screens/Feed";
import Home from "./screens/Home";
import Messages from "./screens/Messages";
import Profile from "./screens/Profile";
const Logo = (props) => {
  return (
    <Image
      source={require("./assets/logo.png")}
      style={{ width: 150, height: 150, resizeMode: "contain" }}
    />
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-variant" : "home-variant-outline";
          } else if (route.name === "Feed") {
            iconName = "magnify";
          } else if (route.name === "Activity") {
            return <FontAwesome name="heart" size={size} color={color} />;
          } else if (route.name === "Profile") {
            return (
              <Image
                source={require("./assets/photo1.jpg")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderWidth: focused ? 1 : 0,
                  borderColor: focused ? "black" : "white",
                }}
              />
            );
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        headerStyle: { height: 100 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <Logo {...props} />,
          headerRight: (props) => <MessageIconComponent {...props} />,
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          header: (props) => (
            <SafeAreaView
              style={{
                paddingTop: 40,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <TextInput placeholder="Search" />
            </SafeAreaView>
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{ headerTitleStyle: { fontWeight: "800" } }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const MessageIconComponent = () => {
  const navigation = useNavigation();
  return (
    <MaterialCommunityIcons
      onPress={() => navigation.navigate("Messages")}
      name="facebook-messenger"
      size={30}
      style={{ marginRight: 20 }}
    />
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{ headerStyle: { height: 100 } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
