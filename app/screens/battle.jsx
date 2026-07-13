import { useNavigation } from "@react-navigation/native";
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import BattleBackground from "../../assets/images/battle_screen_background.jpg";
import PokemonNavBar from "../../components/PokemonNavBar";
import styles from "../../styles/battleStyles";

export default function BattleScreen() {
  const navigation = useNavigation();

  const buttonStyle = {
    height: "17%",
    width: "25%",
    borderRadius: 20,
    borderWidth: 5,
    backgroundColor: "#ffcc00",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <ImageBackground source={BattleBackground} style={{ flex: 1 }}>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>

        <TouchableOpacity
          style={buttonStyle}
          onPress={() => navigation.navigate("Match Queue")}>
          <Text style={{ color: "black", fontWeight: "900", fontSize: 40 }}>BATTLE</Text>
        </TouchableOpacity>

        <ImageBackground
          source={require("../../assets/images/leaderboard_background.png")}
          style={styles.leaderboardBackground}
        >
          <Text style={styles.leaderboardTitle}>Top Trainers</Text>
        <FlatList
                // data={topTrainers}
                contentContainerStyle={styles.listContainer}
            />
        </ImageBackground>



      </View>

      <PokemonNavBar />

    </ImageBackground>
  );
}