import { useState } from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Charizard from "../../assets/images/charizard_image.jpg";
import CharizardImage2 from "../../assets/images/charizard_image2.jpg";
import Umbreon from "../../assets/images/umbreon_image.jpg";
import UmbreonImage2 from "../../assets/images/umbreon_image2.jpg";

export default function PokemonScreen() {

    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const pokemonList = [
        {
            name: "Charizard",
            nameColor: "orange",
            image: Charizard,
            background: CharizardImage2,
            types: ["Fire", "Flying"],
        },
        {
            name: "Umbreon",
            nameColor: "black",
            image: Umbreon,
            background: UmbreonImage2,
            types: ["Dark"],
        },
    ];

    const typeColors = {
        Fire: "red",
        Flying: "#00FFFF",
        Dark: "purple",
        Water: "blue",
        Grass: "green",
    };

    return (

        <ImageBackground source={require("../../assets/images/character_screen_background.jpg")} style={{ flex: 1 }}>
            <View style={styles.rowContainer}>
                {pokemonList.map((poke) => (
                    <TouchableOpacity
                        key={poke.name}
                        style={styles.pokemonContainer}
                        onPress={() => setSelectedPokemon(poke)}
                    >
                        <Image source={poke.image} style={styles.pokemonPortrait} />
                        <Text style={styles.name}>{poke.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedPokemon && (
                <View style={styles.popupOverlay}>
                    <ImageBackground
                        source={selectedPokemon.background}
                        style={styles.popupBox}
                        imageStyle={styles.popupBackground}
                        resizeMode="cover"
                    >
                        <View style={styles.headerSection}>
                            <Text style={[styles.modalTitle, { color: selectedPokemon.nameColor }]}>
                                {selectedPokemon.name}
                            </Text>

                            <Text style={styles.text}>
                                Type:{" "}
                                {selectedPokemon.types.map((type, index) => (
                                    <Text
                                        key={index}
                                        style={{ color: typeColors[type] || "white", fontWeight: "bold" }}
                                    >
                                        {index > 0 && " / "}
                                        {type}
                                    </Text>
                                ))}
                            </Text>
                        </View>

                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setSelectedPokemon(null)}
                        >
                            <Text style={styles.closeText}>Close</Text>
                        </Pressable>
                    </ImageBackground>
                </View>
            )}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    // Main Screen
    container: {
        flex: 1,
        padding: 20,
        margin: 20,
        borderRadius: 20,
    },

    rowContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 20,
    },

    // Pokemon Selection Card
    pokemonContainer: {
        width: 150,
        alignItems: "center",
        alignSelf: "flex-start",
    },

    pokemonPortrait: {
        width: 100,
        height: 170,
        resizeMode: "cover",
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 20,
    },

    name: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },

    // Popup Overlay
    popupOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

    // Popup Card
    popupBox: {
        width: 500,
        height: 350,

        borderRadius: 20,
        borderWidth: 5,
        borderColor: "black",

        alignItems: "center",
        justifyContent: "flex-start",

        overflow: "hidden",
    },

    headerSection: {
        alignItems: "center",
    },

    popupBackground: {
        borderRadius: 15,
    },

    // Pokemon Info
    modalTitle: {
        fontSize: 70,
        fontWeight: "bold",

        marginTop: 10,
        color: "orange",

        textShadowColor: "black",
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 5,
    },

    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginVertical: 2,
        marginBottom: 75,
    },

    // Close Button
    closeButton: {
        marginTop: "auto",

        backgroundColor: "black",

        paddingVertical: 10,
        paddingHorizontal: 25,

        borderRadius: 10,
        marginBottom: 10,
    },

    closeText: {
        color: "white",
        fontWeight: "bold",
    },
});