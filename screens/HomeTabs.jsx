import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import  HomeScreen  from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ContactsScreen from './ContactsScreen'
import Login from './Login';

const Tab = createBottomTabNavigator();

export default function HomeTabs(){
    return(
      <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarActiveBackgroundColor: 'orange'
        
      }}
      >
        <Tab.Screen name='Home' component={HomeScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="home" size={25}/>)
        }}/>
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="person" size={25}/>)
        }}/>
        <Tab.Screen name='Contacts' component={ContactsScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="phone" size={25}/>)
        }}/>
         <Tab.Screen name='Login' component={Login} options={{
            tabBarStyle:{display:'none'},
            tabBarIcon: () => (<MaterialIcons name="login" size={25}/>)
        }}/>
      </Tab.Navigator>
    )
  }
  
  
  
  