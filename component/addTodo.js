import React, { useState } from 'react' ;  
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

export default function AddTodo ({submitHandler} ) {
    const [text, setText] = useState('');
    
    const chnageHandler = (val) =>{
        setText(val);
    }
    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='new Todo....'
            onChangeText={chnageHandler}></TextInput>

            <Button onPress={() => submitHandler(text)} title='Add Photo' color='coral'></Button>
       <Text></Text>
        </View>
    )
}
const styles= StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal:8,
        paddingVertical: 8,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    }
})