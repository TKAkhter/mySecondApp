import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App () {
  const [userNumber, setUserNumber] = useState ();

  const configureNewGameHandler = () => {
    setGameRounds(0);
    setUserNumber(null);
  }

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
  } else if(guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create ({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
