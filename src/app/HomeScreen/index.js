//Created on Wednesday 02 June 2021 10∶10∶10 AM
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style'

const HomeScreen = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.header2}>
        <Text style={styles.headingText} >HomeScreen</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("DetailsScreen")}>
          <Text style={styles.navButton} >Go to Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer} >
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
