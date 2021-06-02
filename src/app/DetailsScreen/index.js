//Created on Wednesday 02 June 2021 10∶10∶10 AM
import React from 'react';
import { Text, View } from 'react-native';
import styles from './style'

const DetailsScreen = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header2}>
        <Text style={styles.headingText} >DetailsScreen</Text>
      </View>
      <View style={styles.footer} >
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

export default DetailsScreen;
