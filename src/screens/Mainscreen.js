import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

function Mainscreen({navigation}) {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image style={styles.hand} source={require('../images/hand.png')} />
                <View>
                    <View style={styles.text}>
                        <Text style={styles.name}>노인순</Text>
                        <Text style={styles.nextname}>어르신</Text>
                    </View>
                    <Text style={styles.explain}>어제는 잘 주무셨나요?</Text>
                </View>
                <View>
                    <View  style={styles.box}>
                        <View style={{marginLeft:60, marginTop:40}}>
                            <TouchableOpacity onPress={() => navigation.navigate("Sleep")}>
                                <Image source={require('../images/bed.png')}/>
                                <Text style={{marginLeft:5, marginTop:8, color:'#AEAEAE'}}>취침</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{position:'absolute', marginLeft : 230, marginTop : 40}}>
                            <TouchableOpacity onPress={() => navigation.navigate("Call")}>
                                <Image source={require('../images/phone.png')} />
                                <Text style={{marginLeft:5, marginTop:8, color:'#AEAEAE'}}>상담</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:60, marginTop : 95}}>
                            <TouchableOpacity onPress={() => navigation.navigate("Sleep")}>
                                <Image source={require('../images/camera.png')} />
                                <Text style={{marginLeft:2, marginTop:8, color:'#AEAEAE'}}>카메라</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{position:'absolute', marginLeft:230, marginTop:185}}>
                            <TouchableOpacity  onPress={() => navigation.navigate("Sleep")}>
                                <Image source={require('../images/volume.png')} />
                                <Text style={{marginLeft:5, marginTop:8, color:'#AEAEAE'}}>음성</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:60, marginTop:100}}>
                            <TouchableOpacity  onPress={() => navigation.navigate("Sleep")}>
                                <Image source={require('../images/setting.png')} />
                                <Text style={{marginLeft:5, marginTop:8, color:'#AEAEAE'}}>설정</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{position:'absolute', marginLeft:230, marginTop : 340}}>
                            <TouchableOpacity  onPress={() => navigation.navigate("Sleep")}>
                                <Image source={require('../images/bell.png')} />
                                <Text style={{marginLeft:5, marginTop:8, color:'#AEAEAE'}}>알림</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hand : {
        height : 86,
        width : 86,
        marginTop : 103,
        marginLeft : 30
    },

    background : {
        flex:1,
        backgroundColor : '#7198FF'
    },

    name : {
        fontSize : 40,
        color : 'white',
        fontWeight : 'bold',
        marginLeft : 30,
        marginTop : 10,
    },

    nextname : {
        fontSize : 30,
        color : 'white',
        marginLeft : 150,
        marginTop : 19,
        position : 'absolute'
    },

    explain : {
        fontSize : 30,
        color : 'white',
        marginLeft : 30,
        marginTop : 10,
    },

    box : {
        width : 331,
        height : 450,
        backgroundColor : 'white',
        marginLeft : 30,
        marginTop : 20,
        borderRadius : 20
    }
});

export default Mainscreen;
