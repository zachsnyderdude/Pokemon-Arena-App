import { useState } from "react";
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { pokemonImages } from "../../assets/pokemonImages";


export default function PokemonScreen() {

    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const pokemonList = [
        {
            name: "Charizard",
            nameColor: "orange",
            image: pokemonImages.charizard.image,
            background: pokemonImages.charizard.background,
            types: ["Fire", "Flying"],
        },
        {
            name: "Umbreon",
            nameColor: "black",
            image: pokemonImages.umbreon.image,
            background: pokemonImages.umbreon.background,
            types: ["Dark"],
        },
        {
            name: "Pikachu",
            nameColor: "yellow",
            image: pokemonImages.pikachu.image,
            background: pokemonImages.pikachu.background,
            types: ["Electric"],
        },
        {
            name: "Gengar",
            nameColor: "purple",
            image: pokemonImages.gengar.image,
            background: pokemonImages.gengar.background,
            types: ["Ghost"],
        },
        {
            name: "Dragonite",
            nameColor: "orange",
            image: pokemonImages.dragonite.image,
            background: pokemonImages.dragonite.background,
            types: ["Dragon", "Flying"],
        },
    ];

    const typeColors = {
        Fire: "red",
        Flying: "#00FFFF",
        Dark: "black",
        Water: "blue",
        Grass: "green",
        Electric: "yellow",
        Ghost: "#8000FF",
        Dragon: "#3385CC"
    };

    return (

        <ImageBackground source={require("../../assets/images/character_screen_background.jpg")} style={{ flex: 1 }}>

            {/* Pokemon list */}
            <FlatList
                data={pokemonList}
                numColumns={4}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={{
                    justifyContent: "center", // 👈 centers each row
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.pokemonContainer}
                        onPress={() => setSelectedPokemon(item)}
                    >
                        <Image source={item.image} style={styles.pokemonPortrait} />
                        <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* MODAL OUTSIDE SCROLLVIEW */}
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

    listContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: 20,
    },

    rowContainer: {
        // flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        padding: 20,
    },

    // Pokemon Selection Card
    pokemonContainer: {
        width: 200,
        alignItems: "center",
        margin: 10,
    },

    pokemonPortrait: {
        width: 140,
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