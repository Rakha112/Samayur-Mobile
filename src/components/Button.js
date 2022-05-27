import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const Button = ({text, bgColor, textColor}) => {
  const navigation = useNavigation();
  const scale = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => {
    return {transform: [{scale: scale.value}]};
  });
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.push('SignUp')}
      onPressIn={() =>
        (scale.value = withTiming(0.95, {
          duration: 500,
          easing: Easing.out(Easing.exp),
        }))
      }
      onPressOut={() =>
        (scale.value = withTiming(1, {
          duration: 500,
          easing: Easing.out(Easing.exp),
        }))
      }>
      <Animated.View
        style={[styles.button, {backgroundColor: bgColor}, animatedStyles]}>
        <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },
});
