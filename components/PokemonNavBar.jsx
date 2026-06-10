import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

// import styles from "../styles/pokemonStyles";

export default function PokemonNavBar() {
    const navigation = useNavigation();

    const buttonStyle = {
        height: 40,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        borderWidth: 3,
        borderColor: "#ffcc00",
        borderRadius: 35,
    }
    return (
        <View
            style={{
                position: "absolute",
                bottom: 20,
                left: 17,
                right: 0,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}>

            <TouchableOpacity
                style={buttonStyle}
                onPress={() => navigation.navigate("Battle")}>
                <Text style={{ color: "white", fontWeight: "bold" }}>BATTLE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                    <Image
                    source={require("../assets/images/Poke_Ball.webp")}
                        style={{
                            width: 80,
                            height: 80,
                            bottom: 40
                        }}>

                    </Image>
                    <Text style={{ color: "black", fontWeight: "bold", left: 20, bottom: 40 }}>HOME</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={buttonStyle}
                onPress={() => navigation.navigate("Pokemon")}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                    POKÉMON
                </Text>
            </TouchableOpacity>


        </View>
    );
}