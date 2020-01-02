import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import Login from '../screens/Login';
import Logout from '../screens/Logout';
import TulisSurat from '../screens/TulisSurat';
import Header from '../components/header';
import DetailSuratMasuk from'../screens/DetailSuratMasuk';
import DetailSuratKeluar from'../screens/DetailSuratKeluar';
import SuratMasuk from '../screens/SuratMasuk';
import SuratKeluar from '../screens/SuratKeluar';


const router = createSwitchNavigator({
    Login: {screen: Login},
    Logout: {screen: Logout},
    DetailSuratMasuk: {screen: DetailSuratMasuk},
    DetailSuratKeluar: {screen: DetailSuratKeluar},
    // Header : {screen: Header},
        
});





export default createAppContainer(router)
