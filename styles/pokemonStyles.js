import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    // Main Pokemon Screen
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
        paddingBottom: 130,
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
        width: "23%", // Changed this to a percentage so it will fit any screen.
        alignItems: "center",
        margin: 10,
    },

    pokemonPortrait: {
        width: 140, // These will eventually need to be changed to percentages
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

    // Pokemon character sheet popup Overlay
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
        height: "97%",
        width: 600, // The width will not accept percentages to change the size of the popup box. It's changing the size of the background image instead. Needs fixing

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
        width: "100%",
        height: "100%",
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
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,

        borderRadius: 20,
        backgroundColor: "black"
    },

    // Pokemon Character Sheet Close Button
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

    fixedCloseButton: {
        position: "absolute",
        bottom: 20,
        right: 10,

        backgroundColor: "black",

        paddingVertical: 10,
        paddingHorizontal: 25,

        borderRadius: 10,
    },


    // Individual Card Overlay
    cardListContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 6,
    },

    largeCard: {
        width: 320,
        height: 400,
        resizeMode: "contain",
    },

    cardOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(0,0,0,0.8)",

        zIndex: 999,
        elevation: 999,
    },

    cardList: {
        justifyContent: "center",
        padding: 20,
    },

    individualCards: {
        width: 125,
        height: 175,
        resizeMode: "contain",
        margin: 5,
    },
    
});

export default styles;