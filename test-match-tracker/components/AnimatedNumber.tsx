import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleProp, TextStyle } from 'react-native';
import { useThrottle } from '../hooks/useThrottle';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  style?: StyleProp<TextStyle>;
}

const AnimatedNumber = ({ value, duration = 500, style }: AnimatedNumberProps) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const throttledValue = useThrottle(value, 1000); 

  const [displayValue, setDisplayValue] = useState(throttledValue);

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.5, 
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0, 
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setDisplayValue(throttledValue);
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1.2,
          friction: 4,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [throttledValue]);

  return (
    <Animated.Text
      style={[
        style,
        {
          opacity,
          transform: [{ scale }, { translateY }],
        },
      ]}
    >
      {displayValue}
    </Animated.Text>
  );
};

export default AnimatedNumber;
