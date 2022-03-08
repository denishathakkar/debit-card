import React,{useState} from 'react';
import {View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AmountItem from '../components/AmountItem';
import colors from '../constants/colors';
import screenNames from '../constants/screenNames';
import strings from '../constants/strings';
import actiontypes from '../redux/actions/actiontypes';
import { MainContainer } from '../styledComponents/styleComponents';

const WeeklyLimitScreen = ({navigation}) => {

  
  const dispatch = useDispatch()
  const spendingLimit = useSelector(state => state.limit);
  const [limit,setLimit] = useState(spendingLimit);

  const handleOnChangeText = (value) => {
    setLimit(value)
  }

  const onPressSave = () =>{
    dispatch({ type: actiontypes.SET_LIMIT, payload: limit });
    navigation.navigate(screenNames.debitCardScreen)
  }

  return (
    <MainContainer>
    <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    <View style={style.header}>
      <Text style={style.headerText}>{strings.spendingLimit}</Text>
    </View>
    <View style={style.body}>
      <View style={style.instructionView}>
        <Image style={style.image} source={require('../assets/images/weekly_limit_simple.png')}></Image>
        <Text style={style.text}>{strings.spendingLimitInstruction}</Text>
      </View>
      <View style={style.instructionView}>
          <View style={style.currencyView}>
              <Text style={style.currencyText}>{`S$`}</Text>
          </View>
          <TextInput
                  onChangeText={handleOnChangeText}
                  value={limit.toString()}
                  keyboardType={"number-pad"}
                  style={style.spendingLimitText}
            />
      </View>
      <Text style={style.text2}>{strings.spendingLimitInstruction2}</Text>
      <View style={style.differentAmountView}>
        <AmountItem amount={3000} setAmount={() => {setLimit(3000)}}/>
        <AmountItem amount={5000} setAmount={() => {setLimit(5000)}}/>
        <AmountItem amount={10000} setAmount={() => {setLimit(10000)}}/>
      </View>
      <TouchableOpacity onPress={onPressSave} style={style.saveButtonView}>
      <Text style={style.saveText}>{`Save`}</Text>
      </TouchableOpacity>
    </View>
    </MainContainer>
  );
};

const style= StyleSheet.create({
  header:{
    flex : 0.1,
    backgroundColor: colors.blueMain,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding : 24
  },
  headerText :{
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontFamily : 'AvenirNext-Bold'
  },
  body:{
    flex : 0.9,
    backgroundColor: colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding : 24
  },
  instructionView:{
    flexDirection : 'row',
    alignItems :'center'
  },
  image:{
    height : 16,
    width  :16
  },
  text:{
    color: colors.greyText,
    fontSize: 14,
    lineHeight : 19,
    alignSelf: 'flex-start',
    marginLeft : 10,
    fontFamily : 'AvenirNext-DemiBold'
  },
  currencyView : {
    backgroundColor : colors.greenMain,
    width : 40,
    height : 22,
    borderRadius : 5,
    justifyContent : 'center',
    alignItems : 'center'
  },
  currencyText :{
    color : colors.white,
    fontSize : 12,
    lineHeight : 16,
    fontFamily : 'AvenirNext-Bold'
  },
  spendingLimitText:{
    color: colors.black,
    fontSize: 24,
    lineHeight : 33,
    textAlign : 'left',
    fontWeight : 'bold',
    borderBottomColor : colors.greyLightText,
    borderBottomWidth : 1,
    fontFamily : 'AvenirNext-Bold'
  },
  text2:{
    color: colors.greyLightText,
    fontSize: 13,
    lineHeight : 18,
    marginTop :10,
    fontFamily : 'Avenir Next'
  },
  differentAmountView:{
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 10,
  },
  saveButtonView:{
    width : '90%',
    alignSelf : 'center',
    height : 56,
    backgroundColor : colors.greenMain,
    position : 'absolute',
    bottom : 20,
    borderRadius : 15,
    justifyContent : 'center',
    alignItems : 'center'
  }, 
  saveText :{
    color: colors.white,
    fontSize: 16,
    lineHeight : 20,
    fontFamily : 'AvenirNext-DemiBold'
  }
});

export default WeeklyLimitScreen;
