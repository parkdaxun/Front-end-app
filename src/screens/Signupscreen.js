import React, { useState } from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet, TextInput, View, Text, Alert} from 'react-native';
import axios from "axios";

const Signupscreen = () => {
    const [nickname, setId] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [checkPwd, setCheckpwd] = useState("")


    function login() {
        if(email.trim() === ""){
            Alert.alert("이메일을 입력하세요!")
        }
        else if(nickname.trim() === ""){
            Alert.alert("닉네임을 입력하세요!")
        }
        else if(password.trim() === ""){
            Alert.alert("비밀번호를 입력하세요!")
        }
        else if(password.trim() != checkPwd.trim()){
            Alert.alert("비밀번호가 같지 않습니다!")
        } else {
            axios.post("http://10.150.151.211:8080/signup",
                {
                    email,
                    nickname,
                    password
                }
            ).then(function(resp) {
                console.log(resp.data)
                if(resp.data != null && resp.data != "") {
                    Alert.alert("회원가입 성공!!")
                    setId("")
                    setCheckpwd("")
                    setPassword("")
                    setEmail("")
                }
            }).catch(function(err) {
                console.log('error message: ${err}')
            })
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} placeholder="이메일을 입력하세요"  onChangeText={(email) => setEmail(email)} value={email}/>
            <TextInput style={styles.input} placeholder="닉네임을 입력하세요" onChangeText={(nickname) => setId(nickname)} value={nickname}/>
            <TextInput style={styles.input} placeholder="비밀번호를 입력하세요" onChangeText={(password) => setPassword(password)} value={password}/>
            <TextInput style={styles.input} placeholder="비밀번호 확인" onChangeText={(checkPwd) => setCheckpwd(checkPwd)} value={checkPwd}/>
            <TouchableOpacity
                style={styles.signup}
                onPress={login}
            >
                <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },

    signup: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#7198FF',
        fontSize: 18,
        padding: 15,
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 0.5,
        color: 'white',
        textAlign: 'center'

    },


    input: {
        width: '100%',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 17,
        marginBottom: 55,
        paddingBottom: 5,
    },
});

export default Signupscreen;
