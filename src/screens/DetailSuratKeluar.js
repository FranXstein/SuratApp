import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Header, BackHandler} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextField, FilledTextField, OutlinedTextField, } from 'react-native-material-textfield';
// import {BackHandler} from 'react-native';



export default class TulisSurat extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' }, {isLoading: true};
  }


  componentDidMount(){
    return fetch('http://demo7784458.mockable.io/SuratMasuk')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
      }, function(){
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

      });
    })
    .catch((error) =>{
      console.error(error);
    })
  }

  fieldRef = React.createRef();

  onSubmit = () => {
    let { current: field } = this.fieldRef;

    console.log(field.value());
  };

  componentWillUnmount() {
    this.backHandler.remove()
  }

  handleBackPress = () => {
    this.props.navigation.navigate('SuratKeluar'); // works best when the goBack is async
    return true;
  }

  formatText = (text) => {
    return text.replace(/[^+\w]/g, '');
  };

  render() {
    const { navigate } = this.props.navigation;
    return (        

      <View style={styles.container}>
        <View style={styles.header}>

       
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}
            onPress={() => navigate('SuratKeluar')}>
              <MaterialCommunityIconsIcon name="arrow-left" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text3}>Detail Surat</Text>
          </View>
          <View style={styles.buttonRowFiller} />
          <View style={styles.rect2}>
            {/* <TouchableOpacity style={styles.button3}>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
            </TouchableOpacity> */}
          </View>
        </View>


        <View style={styles.buttonRowRowColumn}>
          
            {/* <View>
              <View> */}
              <TextField
                label='Tanggal'
                ref={this.fieldRef}
                value='22/11/2019'
                              // maxLength={40}
                multiline
              />
                <TextField
                  label='Kepada:'
                  ref={this.fieldRef}
                  // maxLength={20}
                  multiline
                  value='Ahmad Putra A R'
                />
              {/* </View>
            </View> */}

            <TextField
              label='Perihal'
              ref={this.fieldRef}
              value='cek bosku'
                            // maxLength={40}
              multiline
              />
            <TextField
                label='Isi Surat'
                ref={this.fieldRef}
                value='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
                              // maxLength={400}
                multiline
              />
            
            {/* </View> */}
        </View>
    </View>
      


    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  button: {
    marginLeft: 7,
    padding: 11
  },
  icon: {
    backgroundColor: "transparent",
    color: "#ffc300",
    fontFamily: "Roboto",
    fontSize: 26
  },
  text3: {
    color: "#ffc300",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 34,
    marginTop: 12
  },
  buttonRow: {
    height: 46,
    flexDirection: "row"
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rect2: {
    flexDirection: "row",
    alignItems: "center"
  },
  button2: {
    padding: 11
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#ffc300",
    fontFamily: "Roboto",
    fontSize: 24
  },
  button3: {
    padding: 7
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#ffc300",
    fontFamily: "Roboto",
    fontSize: 24
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
  textInput2: {
    width: 60,
    height: 14,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 22,
    marginLeft: 16
  },
  buttonRowRowColumn: {
    /* warning beda hasil run 340 bayu/ 400 putra */
    width: 340,
    height: 60,
    alignSelf: "center"
  },
  buttonRowRowColumnFiller: {
    flex: 1
  },
  rect3: {
    marginBottom: 19,
    marginLeft: 74
  },
  material: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    marginLeft: 15,
    width: 395,
    height: 20,
    marginTop: 10
  },
  text: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  textInput: {
    width: 139,
    height: 14,
    color: "#121212",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 26,
    marginTop: 1
  },
  textInputAA: {
    width: 139,
    height: 14,
    color: "#121212",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1
  },
  textRow: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 163,
    marginLeft: 18,
    marginTop: 13
  }
});