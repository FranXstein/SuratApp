import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Alert, ScrollView} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class SuratMasuk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Tanggal', 'Perihal', 'Dari', 'Aksi'],
      tableData: []
    }
  }

  componentDidMount(){
    return fetch('http://demo7784458.mockable.io/SuratMasuk')
    .then((response) => response.json())
    .then((responseJson) => {
      let suratMasuk = responseJson.SuratMasuk
      var arrayData = []
      for(let i = 0;i < suratMasuk.length; i++){
        let arrayItem = []
        arrayItem.push(suratMasuk[i].tanggal)
        arrayItem.push(suratMasuk[i].Perihal)
        arrayItem.push(suratMasuk[i].Dari)
        arrayItem.push('')
        arrayData.push(arrayItem)
      }
      this.setState({
        isLoading: false,
        tableData: arrayData
      })
    })
    .catch((error) =>{ 
      console.error(error)
    })
  }


  _alertIndex(index) {
    // Alert.alert(`Menampilkan data SuratMasuk baris ke ${index + 1}`);
    this.props.navigation.navigate('DetailSuratMasuk');

  }
  
  render() {
    const { navigate } = this.props.navigation;
    const state = this.state;
    // const router = createSwitchNavigator({
    //   DetailSuratMasuk : {screen: DetailSuratMasuk},
    // });
    const element = (data, index) => (
      <TouchableOpacity>
        <View style={styles.btn1} >
          <Text style={styles.btnText} onPress = {() => navigate('DetailSuratMasuk')}>Lihat</Text>
        </View>
      </TouchableOpacity>
    )
    return (
      <View style={styles.container1}>
        <View style={styles.header}>

       
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <MaterialCommunityIconsIcon name="menu-open" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Surat Masuk</Text> 
          </View>
          <View style={styles.buttonRowFiller} />
          <View style={styles.rect2}>
  
            {/* <TouchableOpacity style={styles.button3}>
              <MaterialCommunityIconsIcon name="delete-empty" style={styles.icon3} />
            </TouchableOpacity> */}
            <View style={styles.button4}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.icon4}
              />
            </View>
          </View>
        </View>
        <ScrollView vertical={true}>
          <View style={styles.container}>
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            {
              state.tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  { 
                    rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                    ))
                  }
                </TableWrapper>
              ))
            }
          </Table>
        </View>
      </ScrollView>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  button3: {
    backgroundColor: "rgba(251,251,251,1)",
    padding: 11
  },
  MenuIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
 
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  rect: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    marginLeft: 7,
    padding: 11
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#ffc300",
    fontFamily: "Roboto",
    fontSize: 24
  },
 
  icon: {
    backgroundColor: "transparent",
    color: "#ffc300",
    fontFamily: "Roboto",
    fontSize: 24
  },
  button2: {
    padding: 11
  },
  button3: {
    padding: 7
  },
  button4: {
    marginRight: 7,
    padding: 9
  },
  icon4: {
    backgroundColor: "transparent",
    color: "#ffc300",
    fontFamily: "Roboto",
    fontSize: 24
  },
  rect2: {
    flexDirection: "row",
    alignItems: "center"
  },
  ReloadIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  
  TitiktigaIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  buttonRow: {
    height: 46,
    flexDirection: "row"
  },
  header: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "#242424",
    alignItems: 'center',
    justifyContent: 'center',  
    elevation: 4,  
    shadowOffset: {height: 2, width: -2},
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  textHeader: {
    color: '#ffc300',
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 70,
    marginTop: 12,
  },
  bodyContent: {
    flex: 1,
    padding: 12,
    paddingLeft: 16,
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 3,
    fontSize: 22,
    fontFamily: "roboto-regular"
  },
  subjectStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    paddingBottom: 12,
  },
  dateStyle: {
    color: "#000",
    paddingBottom: 10,
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn1: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btn2: { width: 58, height: 18, backgroundColor: '#e71c1c',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});

