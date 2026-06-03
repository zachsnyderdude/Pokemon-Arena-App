import { View, Text, ImageBackground, Image } from "react-native";
import HomeBackground from "../../assets/images/home_screen_background.jpg";

export default function HomeScreen() {
  return (
    <ImageBackground source={HomeBackground} style={{ flex: 1 }}>
      <View>
        <Text></Text>
      </View>
    </ImageBackground>
  );
}