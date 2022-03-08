import React, {useEffect,useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';
import strings from '../constants/strings';

const PaymentCard = () => {
  const userData = useSelector(state => state.data);
  const [isHidden,setIsHidden] = useState(true)
  let name = userData.name;
  let cardValue = userData.cardNumber;
  let cvvValue = userData.cvv;
  let expiry= userData.expiry;

  const [cardNumber, setCardNumber] = useState(cardValue);
  const [cvv, setCVV] = useState(cvvValue);

  const handleOnChangeText = (number) => {
    if(isHidden){
      let card = number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
      setCardNumber(card.replace(/\d{4}(?= \d{4})/g, "****"));
    } else {
      setCardNumber(number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
    }
  }

  const toggleView = () => {
    setIsHidden(!isHidden);
    if(!isHidden){
      let card = cardValue.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
      setCardNumber(card.replace(/\d{4}(?= \d{4})/g, "****"));
      setCVV('***')
    } else {
      setCardNumber(cardValue.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
      setCVV(cvvValue)
    }
  }

  useEffect(()=>{
    if(isHidden){
      let card = cardValue.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
      setCardNumber(card.replace(/\d{4}(?= \d{4})/g, "****"));
      setCVV('***')
    } else {
      setCardNumber(cardValue.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
      setCVV(cvvValue)
    }
  },[])
  
  return (
    <>
    <View style={[styles.debitCardView]} >
        <TouchableOpacity style={[styles.hideShowView]} onPress={toggleView}>
          <Image style={[styles.eyeImage]} source={require('../assets/images/eye.png')}></Image> 
          <Text style={styles.text}>{isHidden ? strings.showCardNumber : strings.hideCardNumber}</Text> 
        </TouchableOpacity>

        <View style={styles.logoView}> 
        <Image style={[styles.logoImage]} source={require('../assets/images/aspireLogo.png')}></Image> 
        </View>
        <View style={styles.nameView}> 
          <Text style={styles.nameText}> {name}</Text>
        </View>
        <View style={styles.cardDetailsView}> 
            <TextInput
              onChange={(text) => handleOnChangeText(text)}
              placeholder='0000 0000 0000 0000'
              value={cardNumber}
              style={styles.cardNumberText}
              editable={false}
            />
            <View style={styles.otherDetailView}>
                <Text
                  style={styles.otherDetailText}
                >{'Thru: '}{expiry}</Text>
                <Text
                  style={styles.otherDetailText}
                >{'CVV: '}{cvv}</Text>
            </View>

        </View>
        <View style={styles.visaView}> 
        <Image style={[styles.visaImage]} source={require('../assets/images/visaLogo.png')}></Image> 
        </View>
    </View>
    </>
  );
};


const styles = StyleSheet.create({
  hideShowView:{
    backgroundColor: colors.white, 
    zIndex: 1, 
    height : 40 , 
    top : -40, 
    width : '70%',
    alignSelf : 'flex-end', 
    position : 'absolute',
    alignItems  : 'center',
    flexDirection : 'row',
    padding : 10,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
  },
  debitCardView : { 
    backgroundColor: colors.greenMain, 
    zIndex: 0, 
    height : 200 , 
    top : -70, 
    borderRadius : 20,
    alignSelf : 'center', 
    width : '80%' , 
    position : 'absolute',
    padding : 24
  },
  eyeImage:{
    height : 16,
    width : 16
  },
  text:{
    fontSize : 14,
    lineHeight : 16,
    fontWeight : "bold",
    color : colors.greenMain,
    marginLeft : 5,
    fontFamily : 'AvenirNext-DemiBold'
  },
  logoView :{
    alignSelf : 'flex-end',
    flex : 0.1,
  },
  logoImage : {
    height : 21,
    width : 74
  },
  nameView : {
    flex : 0.4,
    justifyContent : 'center'
  },
  nameText:{
    fontSize : 22,
    lineHeight : 24,
    letterSpacing : 0.53,
    textAlign : 'left',
    fontWeight : "bold",
    color : colors.white,
    fontFamily : 'AvenirNext-Bold'
  },
  cardDetailsView : {
    flex : 0.4,
    justifyContent : 'center',
  },
  cardNumberText:{
    fontSize : 14,
    lineHeight : 19,
    letterSpacing : 3.46,
    textAlign : 'left',
    color : colors.white,
    fontFamily : 'AvenirNext-DemiBold'
  },
  otherDetailView:{
    flexDirection : 'row',
  },
  otherDetailText:{
    fontSize : 13,
    lineHeight : 18,
    letterSpacing : 1.56,
    textAlign : 'left',
    color : colors.white,
    marginRight : 10,
    fontFamily : 'AvenirNext-DemiBold'
  },
  visaView :{
    alignSelf : 'flex-end',
    flex : 0.1
  },
  visaImage : {
    width : 60,
    height : 20
  }
});

export default PaymentCard;
