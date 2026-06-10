import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

// import App from "./app";
import { pokemonImages } from "../assets/pokemonImages";
import styles from "../styles/indexStyles";

const StartScreen = ({ navigation }) => {

  const backgroundImage = require("../assets/images/pokemon_arena_background.jpg");

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={pokemonImages.pokemonArena.image}
          style={styles.image}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("MainTabs")}
        >
          <Image
            source={pokemonImages.pokeBall.image}
            style={styles.buttonIcon}
          />

          <Text style={styles.buttonText}>Start</Text>

          <Image
            source={pokemonImages.pokeBall.image}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;
