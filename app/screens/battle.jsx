import { ImageBackground, Text, View } from "react-native";
import BattleBackground from "../../assets/images/battle_screen_background.jpg";
import PokemonNavBar from "../../components/PokemonNavBar";

export default function BattleScreen() {
  return (
    <ImageBackground source={BattleBackground} style={{ flex: 1 }}>
      <View>
        <Text></Text>
      </View>
      <PokemonNavBar />
    </ImageBackground>
  );
}