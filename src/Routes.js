import React from 'react';
import { Button, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerContent } from './components/DrawerContent.js';
import CustomersView from './views/Customers/Customers.js';
import NewCustomersView from './views/Customers/NewCustomer.js';
import UpdateCustomersView from './views/Customers/UpdateCustomer.js';

function HomeScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="orange" barStyle="light-content" />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go back 1"
      />
    </View>
  );
}

function NotificationsScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="#004582" barStyle="light-content" />
      <Button onPress={() => navigation.goBack()} title="Go back 2" />
    </View>
  );
}

function MapScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="#004582" barStyle="light-content" />
      <Button onPress={() => navigation.goBack()} title="Go back 3" />
    </View>
  );
}

function PreferencesScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <Button onPress={() => navigation.goBack()} title="Go back 4" />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clientes" component={CustomersView} options={{headerShown: false}} />
      <Stack.Screen name="Novo Cliente" component={NewCustomersView} />
      <Stack.Screen name="Alterar Cliente" component={UpdateCustomersView} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="slide" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Map" component={MapScreen} />
        <Drawer.Screen name="Customers" component={MyStack} />
        <Drawer.Screen name="Preferences" component={PreferencesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}