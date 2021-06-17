import React from 'react';
import { ViewBase, Text, StyleSheet, View } from 'react-native';

const Task = (props) =>{
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{props.text}</Text>
          <Text style={styles.delete}>X</Text>
        </View>
      )
        

}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#DCC8C4',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemText: {
      maxWidth: '80%',
    },
    delete: {
      color: '#DE4223',
    },
  });
export default Task;