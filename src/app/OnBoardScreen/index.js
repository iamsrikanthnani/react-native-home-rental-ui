//Created on Wednesday 02 June 2021 10∶10∶10 AM
import React, { useState } from 'react';
import { StatusBar, View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ONBOARD_STRINGS } from '../../core/Strings';
import { Colors } from '../../core/theme';
import styles from './style'

const OnBoardScreen = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const _NextorGetStarted = () => {
    currentSlide + 1 === ONBOARD_STRINGS.ONBOARD_ARRAY.length ?
      props.navigation.navigate('Home') : setCurrentSlide(currentSlide + 1)
  }
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar translucent backgroundColor={Colors.tranparent} />

      {/* Onboarding Image */}
      <Image
        source={{ uri: ONBOARD_STRINGS.ONBOARD_ARRAY[currentSlide].IMG }}
        style={styles.image}
      />

      {/* Indicator container  */}
      <View style={styles.indicatorContainer}>
        {ONBOARD_STRINGS.ONBOARD_ARRAY.map((item, index) =>
          <View style={[styles.indicator, index === currentSlide ? styles.indicatorActive : null]} />
        )}
      </View>
      {/* Title and text container */}
      <View style={styles.TitleAndTextContainer}>
        {/* Title container */}
        <View>
          <Text style={styles.title}>{ONBOARD_STRINGS.ONBOARD_ARRAY[currentSlide].TITLE}</Text>
        </View>

        {/* Text container */}
        <View style={styles.marginTop10}>
          <Text style={styles.textStyle}>
            {ONBOARD_STRINGS.ONBOARD_ARRAY[currentSlide].CONTENT}
          </Text>
        </View>
      </View>

      {/* Button container */}
      <View
        style={styles.ButtonContainer}>

        {/* button */}
        <TouchableOpacity onPress={() => _NextorGetStarted()} activeOpacity={0.8}>
          <View style={styles.btn}>
            {ONBOARD_STRINGS.ONBOARD_ARRAY.length === currentSlide + 1 ?
              <Text style={styles.colorWhite}>{ONBOARD_STRINGS.BUTTON_START}</Text> :
              <Text style={styles.colorWhite}>{ONBOARD_STRINGS.BUTTON_NEXT}</Text>}
          </View>
        </TouchableOpacity>

        {/* clear onboard array */}
        {/* {ONBOARD_STRINGS.ONBOARD_ARRAY.length === currentSlide + 1 ? <TouchableOpacity onPress={() => setCurrentSlide(0)} activeOpacity={0.8}>
          <View style={[styles.btn, { margin: 3 }]}>
            <Text style={styles.colorWhite}>{ONBOARD_STRINGS.BUTTON_STARTAGAIN}</Text>
          </View>
        </TouchableOpacity> : null} */}
      </View>
    </SafeAreaView>
  );
}

export default OnBoardScreen;
