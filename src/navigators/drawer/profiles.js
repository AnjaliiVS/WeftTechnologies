import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Profiles() {

    return (
      <View style={styles.container}>
      
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
          Welcome to my profile
        </Text>
      </View>
    );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
