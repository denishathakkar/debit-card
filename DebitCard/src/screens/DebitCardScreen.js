import React ,{useEffect, useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeaderView from '../components/HeaderView';
import ListItem from '../components/ListItem';
import PaymentCard from '../components/PaymentCard';
import colors from '../constants/colors';
import screenNames from '../constants/screenNames';
import strings from '../constants/strings';
import actiontypes from '../redux/actions/actiontypes';
import { Body, SecondCard, FirstCard, MainContainer } from '../styledComponents/styleComponents';

const DebitCardScreen = ({navigation}) => {
  
  const spendingLimit = useSelector(state => state.limit);
  const userData = useSelector(state => state.data);
  const [limit , setLimit] = useState(spendingLimit);
  const dispatch = useDispatch();
  const [isLimitSet , setIsLimitSet] = useState(false);
  const [description , setDescription] = useState(isLimitSet ? strings.weeklySetDescription + 'S$ ' + limit : strings.weeklyUnsetDescription)
 
  const availableBalance = userData.availableBalance;

  useEffect(()=>{
    setDescription((isLimitSet ? strings.weeklySetDescription + 'S$ ' + limit : strings.weeklyUnsetDescription))
    if(!isLimitSet){
      dispatch({ type: actiontypes.SET_LIMIT, payload: 0 });
    }
  },[isLimitSet,limit]);

  useEffect(()=>{
    if(limit > 0) {
      setIsLimitSet(true);
    } else{
      setIsLimitSet(false);
    }
  },[limit]);

  useEffect(()=>{
    setLimit(spendingLimit)
  },[spendingLimit]);

  const weeklySpendingAction = () => {
    setIsLimitSet(!isLimitSet)
    if(!isLimitSet) {
      navigation.navigate(screenNames.weeklyLimit)
    } 
  }

  return (
    <MainContainer>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HeaderView weeklyLimitProp={limit} availableBalanceProp={availableBalance}/>
      <Body>
        <FirstCard>
          <View style={[styles.item, styles.bottomView]} >
              <PaymentCard />
          </View>
        </FirstCard>
        <SecondCard>
            <ScrollView style={styles.bottomList}>
              <ListItem name={'Top-up account'} description={'Deposit money to your account to use the card'} isSwitch={false} icon={require('../assets/images/topup.png')}/>
              <ListItem name={'Weekly Spending Limit'} description={description} action={weeklySpendingAction} isSwitch={true} isSet={isLimitSet} icon={require('../assets/images/weekly_limit.png')}/>
              <ListItem name={'Freeze Card'} description={'Your Debit Card is currently active'} isSwitch={false} icon={require('../assets/images/freeze.png')}/>
              <ListItem name={'Deactivate your account'} description={'Your previously deactivated cards'} isSwitch={false} icon={require('../assets/images/deactivate.png')}/>
            </ScrollView>
        </SecondCard>
      </Body>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
  },
  bottomView:{ 
    backgroundColor: colors.white, 
    position : 'relative',
  },
  bottomList:{
    padding : 24,
    flex : 1
  },
  progressDetail :{
    flexDirection : 'row',
    paddingHorizontal : '10%',
    marginTop  : 10
  },
  debitCardSpendingLimit :{
    flex : 0.5,
    color: colors.black,
    fontSize: 13,
    lineHeight : 18,
    fontWeight: 'bold',
    fontFamily : 'AvenirNext-Medium'
  },
  balance:{
    flex : 0.25,
    color: colors.switchGrey,
    fontSize: 24,
    fontSize: 13,
    lineHeight : 18,
    fontWeight: 'bold',
    textAlign :'right',
    fontFamily : 'AvenirNext-DemiBold'
  },
  limit:{
    flex : 0.25,
    color: colors.switchGrey,
    fontSize: 24,
    fontSize: 13,
    lineHeight : 18,
    fontWeight: 'bold',
    fontFamily : 'AvenirNext-DemiBold'
  }
})

export default DebitCardScreen;
