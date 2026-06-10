import { useState } from "react";
import { FlatList, Image, ImageBackground, Pressable, Text, TouchableOpacity, View } from "react-native";

import { cardImages } from "../../assets/cardImages";
import { pokemonImages } from "../../assets/pokemonImages";
import styles from "../../styles/pokemonStyles";


export default function PokemonScreen() {

    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const pokemonList = [
        {
            name: "Charizard",
            nameColor: "orange",
            image: pokemonImages.charizard.image,
            background: pokemonImages.charizard.background,
            types: ["Fire", "Flying"],
            cards: [
                {
                    image: cardImages.charizard1.image,
                },
                {
                    image: cardImages.charizard2.image,
                },
                {
                    image: cardImages.charizard3.image,
                },
                {
                    image: cardImages.charizard4.image,
                },
                {
                    image: cardImages.charizard5.image,
                },
                {
                    image: cardImages.charizard6.image,
                },
                {
                    image: cardImages.charizard7.image,
                },
                {
                    image: cardImages.charizard8.image,
                },
                {
                    image: cardImages.charizard9.image,
                },
                {
                    image: cardImages.charizard10.image,
                },
                {
                    image: cardImages.charizard11.image,
                },
                {
                    image: cardImages.charizard12.image,
                },
                {
                    image: cardImages.charizard13.image,
                },
                {
                    image: cardImages.charizard14.image,
                },
                {
                    image: cardImages.charizard15.image,
                },
                {
                    image: cardImages.charizard16.image,
                },
            ],
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
            types: ["Ghost", "Poison"],
        },
        {
            name: "Dragonite",
            nameColor: "orange",
            image: pokemonImages.dragonite.image,
            background: pokemonImages.dragonite.background,
            types: ["Dragon", "Flying"],
        },
        {
            name: "Torterra",
            nameColor: "green",
            image: pokemonImages.torterra.image,
            background: pokemonImages.torterra.background,
            types: ["Grass", "Ground"],
        },
        {
            name: "Espeon",
            nameColor: "#9D0B7C",
            image: pokemonImages.espeon.image,
            background: pokemonImages.espeon.background,
            types: ["Psychic"],
        },
        {
            name: "Omastar",
            nameColor: "grey",
            image: pokemonImages.omastar.image,
            background: pokemonImages.omastar.background,
            types: ["Water", "Rock"],
        },
        {
            name: "Tinkaton",
            nameColor: "pink",
            image: pokemonImages.tinkaton.image,
            background: pokemonImages.tinkaton.background,
            types: ["Steel", "Fairy"],
        },
        {
            name: "Frosmoth",
            nameColor: "teal",
            image: pokemonImages.frosmoth.image,
            background: pokemonImages.frosmoth.background,
            types: ["Ice", "Bug"],
        },
        {
            name: "Bewear",
            nameColor: "white",
            image: pokemonImages.bewear.image,
            background: pokemonImages.bewear.background,
            types: ["Normal", "Fighting"],
        },
    ];

    const typeColors = {
        Fire: "#DF4920",
        Flying: "#00FFFF",
        Dark: "#140014",
        Water: "#170FB8",
        Grass: "#147617",
        Electric: "#C9B80D",
        Ghost: "#8000FF",
        Dragon: "#3385CC",
        Ground: "#853F0A",
        Psychic: "#9D0B7C",
        Rock: "#443008",
        Steel: "#544F59",
        Fiary: "#F014BF",
        Ice: "#44699C",
        Bug: "#7DCD37",
        Fighting: "#860E14",
        Poison: "#800F6F",
    };

    return (

        <ImageBackground source={require("../../assets/images/character_screen_background.jpg")} style={{ flex: 1 }}>

            {/* Pokemon list */}
            <FlatList
                data={pokemonList}
                numColumns={4}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={{
                    justifyContent: "center",
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

            {/* Pop up overlay for each Pokemon's character sheet */}
            {selectedPokemon && (
                <Pressable
                    style={styles.popupOverlay}
                    onPress={() => {
                        setSelectedPokemon(null);
                        setSelectedCard(null);
                    }}>
                    <Pressable onPress={() => { }}>
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
                                            {index > 0 && <Text style={{ color: "white" }}> / </Text>}
                                            {type}
                                        </Text>
                                    ))}
                                </Text>
                            </View>


                            {/* Card List for each Pokemon IN the popupOverlay */}
                            <View style={styles.cardListContainer}>
                                <FlatList
                                    data={selectedPokemon.cards}
                                    numColumns={3}
                                    contentContainerStyle={styles.listContainer}
                                    columnWrapperStyle={{
                                        justifyContent: "center",
                                    }}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            onPress={() => setSelectedCard(item)}
                                        >
                                            <Image source={item.image}
                                                style={styles.individualCards}
                                            />
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </ImageBackground>
                    </Pressable>
                </Pressable>
            )}

            {/* Pop up overlay for the card itself. I have put this outside of the original Pokemon character sheet overlay so it had free reign to be positioned anywhere it wanted (specifically to not get cut off by the original overlay borders) */}
            {selectedCard && (
                <Pressable
                    style={styles.cardOverlay}
                    onPress={() => setSelectedCard(null)}
                >
                    {/* This blocks closing when tapping the card itself */}
                    <Pressable onPress={() => { }}>
                        <Image
                            source={selectedCard.image}
                            style={styles.largeCard}
                        />
                    </Pressable>
                </Pressable>
            )}
        </ImageBackground>
    );
};