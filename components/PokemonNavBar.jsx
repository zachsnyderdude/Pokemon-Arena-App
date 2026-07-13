import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Svg, { Path, Text as SvgText, TextPath } from "react-native-svg";


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
                bottom: -20,
                left: "2%", //The nav bar is off center for some reason and this puts it where it almost looks exactly centered
                right: 0,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingBottom: 20,
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
                <View
                    style={{
                        position: "absolute",
                        bottom: 15,
                    }}
                >
                    <CurvedHomeText />
                </View>
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

function CurvedHomeText() {
    return (
        <Svg width="100" height="129" viewBox="0 0 100 120">
            
                <Path
                    id="homeArc"
                    d="M 6 55 A 32 32 0 0 1 74 55"
                    fill="none"
                    stroke="none"
                />
            

            <SvgText
                fill="black"
                fontSize="16"
                fontWeight="1000"
                letterSpacing="2"
            >
                <TextPath href="#homeArc" startOffset="25%">
                    HOME
                </TextPath>
            </SvgText>

                <Path
                    id="screenArc"
                    d="M 0 70 A 32 32 0 0 0 80 70"
                    fill="none"
                    stroke="none"
                />
            

            <SvgText
                fill="black"
                fontSize="16"
                fontWeight="1000"
                letterSpacing="4"
            >
                <TextPath href="#screenArc" startOffset="15%">
                    SCREEN
                </TextPath>
            </SvgText>





        </Svg>

        
    );
}
