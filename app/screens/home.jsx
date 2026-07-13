import { ImageBackground, View } from "react-native";
import HomeBackground from "../../assets/images/home_screen_background.jpg";
import PokemonNavBar from "../../components/PokemonNavBar";

// import Charizard from "../../assets/charizard.glb"; //Need to add Charizard's 3D model
// import ModelScreen from "../../components/ModelScreen"; //Will uncomment this once I am ready to use the 3D models

export default function HomeScreen() {
  return (
    <ImageBackground source={HomeBackground} style={{ flex: 1 }}>

      {/* 3D Model Area */}
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        {/* <ModelScreen model={Charizard} /> */}
      </View>

      <PokemonNavBar />
    </ImageBackground>
  );
}