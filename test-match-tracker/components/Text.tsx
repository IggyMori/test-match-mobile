import React from 'react';
import { Text as NativeText, TextProps, StyleSheet } from 'react-native';

export  const Text = ({ style, ...props }: TextProps) => {
  return <NativeText style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
  },
});

