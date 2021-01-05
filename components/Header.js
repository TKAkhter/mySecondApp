import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
<<<<<<< HEAD
import TitleText from './TitleText';
=======
>>>>>>> 3633d75... app prototype finalized

const Header = props => {
  return (
    <View style={styles.header}>
<<<<<<< HEAD
      <TitleText>{props.title}</TitleText>
=======
      <Text style={styles.headerTitle}>{props.title}</Text>
>>>>>>> 3633d75... app prototype finalized
    </View>
  );
};

const styles = StyleSheet.create ({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
<<<<<<< HEAD
=======
  headerTitle: {
    color: '#000000',
    fontSize: 18,
  },
>>>>>>> 3633d75... app prototype finalized
});

export default Header;
