import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

export default class Login extends Component {

    state = { NIM: "", password: "" }

    checkLogin() {
        // fetch('http://mockable.io',{
        //     method: 'POST',

        //     body: JSON.stringify({
        //         username: this.state.NIM,
        //         password: this.state.password,
        //     }),
        // })
        // .then(response => response.json())
        // .then(responsejson => {
        //     alert(JSON.stringify(responsejson))
            // var login = response.json()
            // if (login.data.success) {
            //     this.props.navigation.navigate('SuratMasuk')
            // } else {
            //     Alert.alert('Error', 'NIM/Password Salah', [{
            //         text: 'Okay'
            //     }])
            // }
        // })
        console.warn(NIM, password)
        const { NIM, password } = this.state
        if (NIM == '17106050024' && password == '141') {
            this.props.navigation.navigate('SuratMasuk')
        } else {
            Alert.alert('Error', 'NIM/Password Salah', [{
                text: 'Okay'
            }])
        }
    }

    hlep(){
        Alert.alert('Bantuan', 'Jika anda mengalami masalah Tidak bisa masuk/Login padahal sudah memasukkan Username dan password dengan benar harap hubungi PTIPD.', [{
            text:'Okay'
        }])
    }

    render() {
        return (
            <View style={styles.container}>
                
                <Image style={styles.image}
                    source={require('../assets/images/logo.png')}
                />
                <Text style={styles.logoText}>SUKApps</Text>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="NIM"
                    placeholderTextColor="#6b6b6b"
                    // selectionColor="#fff"
                    // keyboardType="email-address"
                    onChangeText={text => this.setState({ NIM: text })}
                    onSubmitEditing={() => this.NIM.focus()}
                    ref={(input) => this.NIM = input}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#6b6b6b"
                    onChangeText={text => this.setState({ password: text })}
                    ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={_ => this.checkLogin()} >Login{this.props.type}</Text>
                </TouchableOpacity>

                <View style = {styles.helep} key="3">

                    <Text style = {styles.helpText}> Mengalami masalah saat login? </Text>

                    <TouchableOpacity onPress = {this.hlep}>< Text style = {styles.helpButton} > Bantuan </Text></TouchableOpacity >

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
        marginVertical: 15,
        marginBottom: 60,
        fontSize: 20,
        color: '#000000',
        // fontWeight: 'bold'
    },
    inputBox: {
        // width: 300,
        // backgroundColor: '#ffffff',
        // borderRadius: 12,
        // paddingHorizontal: 16,
        // paddingVertical: 4,
        // fontSize: 12,
        // marginVertical: 10,
        // borderWidth: 1
        width: 300,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#6b6b6b',
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10,
        textAlign: 'center'
    },
    button: {
        // width: 200,
        // backgroundColor: '#444444',
        // borderRadius: 25,
        // marginVertical: 10,
        // paddingVertical: 10,
        // marginBottom: 40,
        width: 125,
        backgroundColor: '#333333',
        borderRadius: 12,
        marginVertical: 10,
        paddingVertical: 13,
        // marginBottom: 70
    },
    buttonText: {
        // fontSize: 13,
        // fontWeight: '500',
        // color: '#ffffff',
        // textAlign: 'center'
        fontSize: 16,
        fontWeight: '500',
        color: '#ffc300',
        textAlign: 'center'
    },
    image: {
        width: 100, 
        height: 110, 
        // marginBottom: 40
    },
    helep: {
        // flexGrow: 1,
        marginTop: 40,
        // alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    helpText: {
        color: '#000000',
        fontSize: 16
    },

    helpButton: {
        color: '#ffc300',
        fontSize: 16,
        fontWeight: '500'
    }

});