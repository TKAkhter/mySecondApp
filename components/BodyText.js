import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => <Text style={styles.body}>{props.children}</Text>;

const styles = StyleSheet.create({
  body: {
<<<<<<< HEAD
    fontFamily: 'open-sans-bold'
=======
    fontFamily: 'open-sans'
>>>>>>> 3633d75... app prototype finalized
  }
});

export default BodyText;
