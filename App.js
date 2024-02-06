// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/LoadingScreen';
import ThoughtScreen from './src/ThoughtScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import HomeScreen from './src/HomeScreen';
import ReminderPage from './src/ReminderPage';
import HomeServ from './src/HomeServ';
import Electricians from './src/contacts/Electricians'; // Import Electricians component
import Others from './src/contacts/Others'; 
import Appliance from './src/contacts/Appliance'; 
import Constructors from './src/contacts/Constructors'; 
import Plumbers from './src/contacts/Plumbers'; 
import Service from './src/contacts/Service'; 
import Auto from './src/contacts/Auto'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Thought"
          component={ThoughtScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reminders"
          component={ReminderPage}
          options={{ title: 'Reminders' }}
        />
        <Stack.Screen
          name="HomeServ"
          component={HomeServ}
          options={{ title: 'Home Services' }}
        />
        <Stack.Screen
          name="Electricians"
          component={Electricians}
          options={{ title: 'Electricians' }}
        />
        <Stack.Screen
          name="Others"
          component={Others}
          options={{ title: 'Others' }}
        />
        <Stack.Screen
          name="Appliance"
          component={Appliance}
          options={{ title: 'Appliance Repair' }}
        />
        <Stack.Screen
          name="Constructors"
          component={Constructors}
          options={{ title: 'Constructors' }}
        />
        <Stack.Screen
          name="Plumbers"
          component={Plumbers}
          options={{ title: 'Plumbers' }}
        />
        <Stack.Screen
          name="Service"
          component={Service}
          options={{ title: 'Service' }}
        />
        <Stack.Screen
          name="Auto"
          component={Auto}
          options={{ title: 'Auto Service' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;