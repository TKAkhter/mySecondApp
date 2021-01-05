<<<<<<< HEAD
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync ({
    'open-sans': require ('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require ('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App () {
  const [userNumber, setUserNumber] = useState ();

  const [dataLoaded, setDataLoaded] = useState (false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded (true)}
  //       onError={(err) => console.log (err)}
  //     />
  //   );
  // }

  const configureNewGameHandler = () => {
    setGameRounds (0);
    setUserNumber (null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber (selectedNumber);
  };

  const [guessRounds, setGameRounds] = useState (0);

  const gameOverHandler = numOfRounds => {
    setGameRounds (numOfRounds);
  };

  let content = <StartGameScreen onStart={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
>>>>>>> 0932cc1... Created a new Expo app
    </View>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create ({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> 0932cc1... Created a new Expo app
  },
});
