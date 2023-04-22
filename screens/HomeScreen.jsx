import { Text, View } from 'react-native';
import {styles} from '../assets/styles/styles';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

let users = [
  {username: 'tv', name:'Teresa Valencia', password:'11', role:1},
  {username: 'fz', name:'Faustino Zapata', password:'22', role:2},
]

export default function HomeScreen({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormess, setErrormess] = useState('');


    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', marginBottom:10}}>Inicio de Sesion</Text>
        <TextInput
          label="Usuario"
          mode="outlined"
          left={<TextInput.Icon icon="account"/>}
          onChangeText={username => setUsername(username)}
          value={username}
        />
        <TextInput
          style={{ marginTop:10}} 
          label="Password"
          mode="outlined"
          right={<TextInput.Icon icon="eye"/>}
          onChangeText={password => setPassword(password)}
          value={password}
          secureTextEntry
        /> 
        <Button icon="login" 
        style={{ marginTop:10}} 
        mode="contained" 
        onPress={() =>{
          let fuser = users.find(usr => usr.username == username && usr.password == password);
          if (fuser != undefined){
            const {name, username} = fuser;
            navigation.navigate('Profile',{name:name, username:username})
            setErrormess('')
          }
          else{
            setErrormess('Usuario y/o password invalido(s)')
          }
        }}>
          Ingresar
        </Button>

        <Text style={{color:'red'}}>{errormess}</Text>
          
     
      
      {/*  <Button
          title="Ir a Perfil del Usuario"
          onPress={()=>{
            navigation.navigate('Profile')
          }}
        /> */}
      </View>
    );
  }



  