import { ImageBackground, Text, View } from "react-native";
import HomeBackground from "../../assets/images/home_screen_background.jpg";

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

      {/* Optional UI overlay */}
      <View style={{ position: "absolute", top: 50, width: "100%", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Home
        </Text>
      </View>

    </ImageBackground>
  );
}