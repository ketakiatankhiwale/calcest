/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    padding: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowSpread: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },
  logo: {

    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.10,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },

  logoContainer: {
    marginTop: 18,
     justifyContent:'space-between',
    alignSelf: 'center',
    paddingTop:90,
    alignItems: 'center',
  },
  inputbox: {
    margin: 20,
      height: 20,
      borderColor: '#000',
      borderWidth: 1,
  },
   linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  homeTitle: {
    color:'white',
    fontSize:15,
    paddingTop:15,
    paddingBottom:10,
    textAlign: 'center',
   // height: Dimensions.get('window').height * 0.08,
  },
  homeTitle1: {
    color:'black',
    fontSize:15,
    paddingTop:15,
    paddingBottom:10,
    textAlign: 'center',

  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#307ecc',
  },
  cardStyle: {
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal:5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -30,
    borderRadius:20,
    marginBottom:0,
    alignItems:'center',
  },
  cardHeadingStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeadingTextStyle: {
    color: '#606070',
    fontWeight: 'bold',
  },
  childViewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingStyle: {

    color: '#002e5b',
    fontSize: 15,
    textAlign:'center',
    alignItems:'center',
    paddingTop:5,
  },
  categoryheadingStyle: {
    lineHeight: 23,
    color: '#fff',
    fontSize: 15,
    alignItems:'center',
    paddingTop:5,
    fontWeight: 'bold',
  },
  cardParentView: {
    alignItems:'center',
    marginHorizontal: 12,
    width:Dimensions.get('window').width * 0.25,

  },
  cardImageContainer: {
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#009387',
    width: 70,
    height: 70,
    padding:15,
    borderRadius:50,
    alignItems:'center',
  },
  cardcategoryImageContainer: {
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#35afde',
    width: 50,
    height: 50,
    padding:12,
    borderRadius:50,
    alignItems:'center',
  },

  forminput: {
    width: Dimensions.get('window').width * 0.85,
    height: 55,
    backgroundColor:'transparent',
    marginBottom: 10,
    padding: 0,
    color: '#35afde',
    borderRadius: 20,
    fontSize: 15,
    fontWeight: '500',
  },
  formdateinput: {
    width: Dimensions.get('window').width * 0.85,
    height: 55,
    backgroundColor:'transparent',
    marginBottom: 10,
    paddingVertical: 0,
    color: '#35afde',
    borderRadius: 20,
    fontSize: 15,
    fontWeight: '500',
  },
  formcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  twos: {
    width:Dimensions.get('window').width * 0.10,
    marginBottom: 10,
  },
  forminputTwos: {
    width: Dimensions.get('window').width * 0.40,
    height: 55,
    backgroundColor:'white',
    marginBottom: 10,
    padding: 0,
    color: '#35afde',
    borderRadius: 20,
    fontSize: 15,
    fontWeight: '500',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 6,
    backgroundColor: '#002e5b',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
  bottomModal: {
    justifyContent: 'center',
    margin: 0,
},
modalContainer: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    height: hp('30%'),
    width: wp('90%'),
    borderRadius: hp('2%'),
    alignSelf: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-evenly',
},
image: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  backgroundColor: 'white',
  position:'relative',
},
 submitTab: {
        backgroundColor: '#35AFDE',
        borderRadius: hp('1%'),
        height: hp('5%'),
        width: wp('50%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp('4%'),
    },
});

export default viewStyles;
