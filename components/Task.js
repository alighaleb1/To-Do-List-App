import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.left} >
                <View style={styles.square}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.circular} >
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: 15,
},

left: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',

},
square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 4,
    marginRight: 15,
},
text: {
    maxHeight: '80%',
    color: '#55BCF6',
    fontWeight: '800',
    fontSize: 12,

},
circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
}, 

});

export default Task;