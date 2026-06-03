import { View, Text, ImageBackground } from "react-native";
import BattleBackground from "../../assets/images/battle_screen_background.jpg";

export default function BattleScreen() {
  return (
    <ImageBackground source={BattleBackground} style={{ flex: 1 }}>
      <View>
        <Text></Text>
      </View>
    </ImageBackground>
  );
}