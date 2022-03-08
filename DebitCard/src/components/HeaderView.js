import React,{useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../constants/colors';
import strings from '../constants/strings';

const HeaderView = ({availableBalanceProp}) => {

  const [availableBalance] = useState(availableBalanceProp);

  return (
    <View style={[styles.item]}>
    <View style={styles.headerContainer}>
        <View style={styles.titleView}>
            <Text style={styles.headerText}>{strings.debitCard}</Text>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.amountView}> 
          <Text style={styles.text}>
              {strings.availableBalance}
          </Text>
          <View style={styles.balanceView}>
            <View style={styles.currencyView}>
              <Text style={styles.currencyText}>{`S$`}</Text>
            </View>
            <Text style={styles.amountText}>{availableBalance}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  item: {
    width: '100%',
    backgroundColor: colors.blueMain, 
    flex: 0.4,
    marginVertical : 10
  },
  headerContainer:{
    flex : 1,
    paddingHorizontal  : 24,
  },
  logo:{
    height : 25,
    width : 25
  },
  headerText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontFamily:'AvenirNext-Bold'
  },  
  titleView : {
    flex : 0.3,
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 32
  },
  amountView:{
    flex : 0.7,
    marginTop : 24
  },
  balanceView:{
    flexDirection : 'row',
    marginTop : 10,
    height : 30,
  },
  currencyView : {
    backgroundColor : colors.greenMain,
    width : 40,
    height : 22,
    borderRadius : 5,
    justifyContent : 'center',
    alignItems : 'center'
  },
  text :{
    fontSize : 14,
    lineHeight : 16,
    fontWeight : "bold",
    color : colors.white,
    marginTop  :10,
    fontFamily:'Avenir-Medium'
  },
  currencyText :{
    color : colors.white,
    fontSize : 12,
    lineHeight : 16,
    fontFamily:'AvenirNext-Bold'
  },
  amountText :{
    color : colors.white,
    fontSize : 24,
    lineHeight : 26,
    marginLeft : 10,
    fontFamily:'Avenir-Medium',
    fontWeight : 'bold'
  }
});

export default HeaderView;
