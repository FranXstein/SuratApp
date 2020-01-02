import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import router from "./src/components/router";
import Login from "./src/screens/Login";
import SuratMasuk from "./src/screens/SuratMasuk";
import SuratKeluar from "./src/screens/SuratKeluar";
import TulisSurat from "./src/screens/TulisSurat";


import {Container, Content , Header, Body, Icon} from 'native-base';
import { string } from 'prop-types';


const CustomDrawerContentComponent = (props) =>(

    <Container>
        <Header style = {styles.header}>
            <Body>
                <Image
                style = {styles.drawerImage}
                source={require('./src/assets/images/profilby.jpg')}/>
            </Body>
            <Text style = {styles.drawerTextNAMA}>
                NOVIANTO TRISNA BAYU
            </Text>
            <Text style = {styles.drawerTextNIM}>
                17106050024
            </Text>
            {/* <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text stye = {styles.drawerTextNAMA}>{item.NAMA}</Text>}
                />
            </View> */}
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)




const MyDrawerNavigator = createDrawerNavigator({
    SuratMasuk: {screen: SuratMasuk},
    TulisSurat: {screen:TulisSurat},
    SuratKeluar: {screen: SuratKeluar},
    Logout: {screen: router},

},
{
    initialRouteName: 'Logout',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 300,
    drawerPosition:'left',
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends Component{
    render(){
        return <AppContainer />
    }
    // componentDidMount(){
    //     return fetch('http://demo7784458.mockable.io/Login')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         this.setState({
    //             isLoading: false,
    //             dataSource: responseJson.data,
    //         }, function(){

    //         });
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    // }
}
styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerImage:{
        height: 100,
        width: 100,
        borderRadius: 75,
        marginLeft: 5,
        marginTop: 20,
    },
    drawerTextNIM:{
        color: "#121212",
        fontSize: 15,
        fontFamily: "ubuntu-700",
        marginTop: 5,
        alignSelf: "center",
        marginBottom: 10,
    },
    drawerTextNAMA:{
        color: "#121212",
        fontSize: 15,
        fontFamily: "ubuntu-700",
        marginTop: 5,
        alignSelf: "center"
    },
    header:{
        height: 190,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#FFF',
        flexDirection: "column",        
        elevation: 4,  
        shadowOffset: {height: 2, width: -2},
        shadowColor: "#242424",
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        overflow: "hidden"
    }
})