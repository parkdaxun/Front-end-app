import {StyleSheet, Text, View} from "react-native";

function Callscreen() {
    return (
        <View>
            <Text style={styles.name}>노인순</Text>
            <View>
                <View style={styles.callbutton}>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    callbutton : {
        width : 331,
        height : 84,
        backgroundColor : 'blue',
        borderRadius : 10,
        marginTop : 27,
    },

    name: {
        fontSize : 40,
        fontWeight : 'bold',
        marginTop : 52,
        marginLeft : 30,
    },
});

export default Callscreen;
