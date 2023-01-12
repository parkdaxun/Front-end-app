import React from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, onPress, Text} from 'react-native';

const Loginscreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>

                <Image style={styles.img} source={require('../images/logo.png')}/>

                <TextInput style={styles.input} placeholder="이메일을 입력하세요" />
                <TextInput style={styles.input} placeholder="비밀번호를 입력하세요" />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                    >
                        <Text style={styles.buttonText}>로그인</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                    >
                        <Text style={styles.buttonText}>회원가입</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7198FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        marginBottom: 50,
    },

    button: {
        alignItems: "center",
        backgroundColor: "white",
        width: 140,
        padding: 10,
        borderRadius: 10,
        margin: 9,
        marginTop: 50,

    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 0.5,
        color: '#7198FF'
    },

    input: {
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 18,
        padding: 10,
        width: 300,
        marginBottom: 20,
    },

    card: {
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default Loginscreen;
