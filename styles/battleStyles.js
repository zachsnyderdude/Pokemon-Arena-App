import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

listContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: 20,
        paddingBottom: 130,
},

leaderboardBackground: { // Need to fix this leaderboard background image to fit the border and to be positioned on the left side of the battle screen.
    width: "50%",
    height: "50%",
    borderWidth: 5,
    resizeMode: "cover",
},

leaderboardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
},

})


export default styles;