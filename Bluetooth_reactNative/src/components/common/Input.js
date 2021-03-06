import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{ label }</Text>
      <TextInput
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      placeholder={placeholder}
      style={inputStyle}
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid={'rgba(0,0,0,0)'}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2 // 2/3 will be for inputStyle
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 // 1/3 will be for labelStyle
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
