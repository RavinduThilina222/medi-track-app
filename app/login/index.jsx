import { View, Text,Image } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default function loginScreen() {
  return (
    <View>
      <View style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
      }}>
        <Image source={require('./../../assets/images/login.png')}
        style={styles?.image} />
      </View>
      <View style={{
        padding:25,
        backgroundColor: Colors.PRIMARY,
        height:'100%'
      }}>
        <Text style={{
          fontSize:30,
          fontWeight:'bold',
          color:'white',
          textAlign:'center',
        }}>
          Stay on Track, Stay Healthy!
        </Text>

        <Text style={{
          color:'white',
          textAlign:'center',
          fontSize:17,
          marginTop:15,
        }}>
          Track your meds, take control of your health, Stay constient,Stay confident
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 210,
    height: 450,
    borderRadius: 20,
  }
})
