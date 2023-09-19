import React, { useState } from 'react' ;  
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './component/header';
import TodoItem from './component/todoItem';
import AddTodo from './component/addTodo';
import Sandbox from './component/sandbox';

export default function App() {
  const [name,  setName] = useState ('shaun')
  const [todos, setTodos] = useState([
    {text: 'byu cofee', key: '1'},
    {text: 'Orange', key: '2'},
    {text: 'Banana', key: '3'},
  
  ]);
  const pressHandler =(key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo  => todo.key != key)
    });
  }
  const submitHandler = (text) => {
    if(text.length >3){
      setTodos((prevTodos)=>{
        return[
          {text: text, key: Math.random().toString()},
          ... prevTodos
        ];
      })
    }else{
      Alert.alert('Ooops! ', 'Todos must be 3 chars long',[
        {text: 'Understood'}
      ])
    }
   
  }
  return (
   // <Sandbox/>
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    console.log('dismissed keybord');
     } }>
 <View style={styles.container}>
      <Header/>
      <View  style={styles.content}>
      <AddTodo  submitHandler ={submitHandler}/> 
      <View style={styles.list}>
     
        <FlatList data={todos}
        renderItem={({item})=> (
           <TodoItem item= {item} pressHandler={pressHandler}>

           </TodoItem>
        )}>
          
        </FlatList>


      </View>
      </View>
     
      


    </View>
    </TouchableWithoutFeedback>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
   content: {
    padding:40,
  },list:{
    marginTop: 20,
  }
});
