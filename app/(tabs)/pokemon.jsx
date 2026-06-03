import { View, Text, ImageBackground } from "react-native";
import PokemonBackground from "../../assets/images/character_screen_background.jpg";

export default function PokemonScreen() {
  return (
    <ImageBackground source={PokemonBackground} style={{ flex: 1 }}>
      <View>
        <Text></Text>
      </View>
    </ImageBackground>
  );
}