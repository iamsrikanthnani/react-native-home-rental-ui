//Created on Wednesday 02 June 2021 10∶10∶10 AM
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style'

const OnBoardScreen = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.header2}>
        <Text style={styles.headingText} >OnBoardScreen</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles.navButton} >Go to Home</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.footer} >
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

export default OnBoardScreen;
