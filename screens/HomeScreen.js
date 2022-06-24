import React from 'react';
import { 
  View, 
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity, Image, Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {Card} from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import viewStyles from './styles/viewStyles';

const HomeScreen = ({navigation}) => {
  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome to CalcEst</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity  >
              <View style={viewStyles.cardParentView}>
                <View style={viewStyles.cardImageContainer}>
                  <Image
                    source={require('../assets/icons/newspaper.png')}
                    style={{width: 35, height: 35}}
                  />
                </View>
                <View style={viewStyles.childViewTextStyle}>
                    <Text style={viewStyles.headingStyle}>
                      Newspaper</Text>
                </View>
                 
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={viewStyles.cardParentView}>
                <View style={viewStyles.cardImageContainer}>
                  <Image
                    source={require('../assets/icons/magazine.png')}
                    style={{width: 35, height: 35}}
                  />
                </View>
                <View style={viewStyles.childViewTextStyle}>
                    <Text style={viewStyles.headingStyle}>Magazine</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={viewStyles.cardParentView}>
                <View style={viewStyles.cardImageContainer}>
                  <Image
                    source={require('../assets/icons/agent.png')}
                    style={{width: 35, height: 35}} 
                  />
                </View>
                <View style={viewStyles.childViewTextStyle}>
                  <Text style={viewStyles.headingStyle}>
                    Agent</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop:35}}>
              <View style={viewStyles.cardParentView}>
                  <View style={viewStyles.cardImageContainer}>
                    <Image
                      source={require('../assets/icons/order.png')}
                      style={{width: 35, height: 35}}
                    />
                  </View>
                  
                    <View style={viewStyles.childViewTextStyle}>
                      <Text style={viewStyles.headingStyle}>
                        Order</Text>
                    </View>
                  </View>
              <View style={viewStyles.cardParentView}>
                <View style={viewStyles.cardImageContainer}>
                  <Image
                    source={require('../assets/icons/accounting.png')}
                    style={{width: 35, height: 35}}
                  />
                </View>
                <View style={viewStyles.childViewTextStyle}>
                    <Text style={viewStyles.headingStyle}>Calculator</Text>
                  </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('DASHBOARD')} >
                <View style={viewStyles.cardParentView}>
                  <View style={viewStyles.cardImageContainer}>
                    <Image
                      source={require('../assets/icons/down-arrow.png')}
                      style={{width: 35, height: 35}}
                    />
                  </View>
                  <View style={viewStyles.childViewTextStyle}>
                    <Text style={viewStyles.headingStyle}>
                      Show More</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
        </Animatable.View>
        
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  }
});
