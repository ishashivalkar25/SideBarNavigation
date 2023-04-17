
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Components/DrawerContent';
import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import FixedExp from "./Components/FixedExp";
import AddFixedExp from "./Components/AddFixedExp";
import NotificationsScreen from "./Components/NotificationsScreen";
import SettingsScreen from "./Components/SettingsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="FixedExp" component={FixedExp} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }}/>
        <Stack.Screen name="AddFixedExp" component={AddFixedExp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;