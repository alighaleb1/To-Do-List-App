import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,ImageBackground,TouchableOpacity, Text, View,TextInput,KeyboardAvoidingView, Platform, Keyboard, ScrollView} from 'react-native';
import Task from './components/Task.js';


export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const  handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let copy = [...taskItems];
    copy.splice(index, 1);
    setTaskItems(copy);

  }

  return (
    <KeyboardAvoidingView>
    <ImageBackground 
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGnv2kwPnEfN47jiYPZTTlSU3mf_udOM1UA&usqp=CAU'}}
          style={styles.image1}>
      <View style={styles.task}>
        <Text style={styles.header}>What's the plan? </Text>
      </View>

      <ScrollView style={styles.scroll}>
      <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return <TouchableOpacity onPress={()=> completeTask(index)} >
                <Task text={item} />
            </TouchableOpacity>
          })
        }
      </View>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding": "height"}
        style={styles.write}>
          <TextInput style={styles.input} placeholderTextColor='#55BCF6' placeholder='Add a task' 
             value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.wr}>
              <Text style={styles.wrt}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </ImageBackground>
    </KeyboardAvoidingView>

  
  );
}

const styles = StyleSheet.create({
  image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },

  task: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  items: {
    marginTop: 10,
    height: '20%',
  },

  write: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 300,
    color: '#55BCF6', 
    marginLeft: 10,
  },

  wr: {
    width: 60,
    height: 60,
    backgroundColor: '#55BCF6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    marginRight: 10,
  },

  wrt: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },

  scroll: {
    marginTop: '3.5%',
    marginBottom: '40%',
  },
 

});
