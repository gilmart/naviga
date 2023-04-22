//import {  Text, View, Button } from 'react-native';
//LIBRERIAS PARA EL MANEJO DE L NAVEGACION ENTRE PANTALLAS
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//

import HomeTabs from './screens/HomeTabs';

import Login from './screens/Login';
import { View } from 'react-native';

//DEFINIR LAS RUTAS DE CADA COMPONENTE
 const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'>
        <Stack.Screen name='HomeTabs' component={HomeTabs} options={{title:'Sistema Demo'}}/>

        {/*<Stack.Screen name='Login' component={Login} options={{title:'Login'}}/>*/}
        {/*<Stack.Screen name='Contacts' component={ContactsScreen} options={{title:'Contactenos'}}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{title:'Inicio'}}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
