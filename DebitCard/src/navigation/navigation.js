import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from '../constants/screenNames';
import DebitCardScreen from '../screens/DebitCardScreen';
import WeeklyLimitScreen from '../screens/WeeklyLimit';
import colors from '../constants/colors';
import DebitTabIcon from '../icons/DebitTabIcon';
import strings from '../constants/strings';
import BlankScreen from '../screens/BlankScreen';
import Icon from '../icons/Icon';
import { createStackNavigator } from '@react-navigation/stack';

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function DebitCardNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name={screenNames.debitCardScreen} component={DebitCardScreen} />
      <Stack.Screen name={screenNames.weeklyLimit} component={WeeklyLimitScreen} />
    </Stack.Navigator>
  );
}

export const MainStackScreen = () => (
  <NavigationContainer independent={true}>
     <BottomTabs.Navigator
        initialRouteName={screenNames.debitTab}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarItemStyle: {backgroundColor: colors.white},
        }}>
        <BottomTabs.Screen
              name={strings.home}
              component={BlankScreen}
              options={{   
                tabBarIcon: function tabIcon({focused}) {
                  return (
                    <>             
                      <Icon source={require('../assets/images/Home.png')} height={24} width={24}/>
                      <Text style={[styles.fontStyle,{color: colors.switchGrey}]}>
                        {strings.payments}
                      </Text>
                    </>
                  )
                },
              }}
        />
        <BottomTabs.Screen
          name={screenNames.debitTab}
          component={DebitCardNavigator}
          options={{
            tabBarIcon: function tabIcon({focused}) {
              return focused ? (
                <>             
                  <DebitTabIcon color={colors.greenMain} height={24} width={24}/>
                  <Text style={[styles.fontStyle,{color: colors.greenMain}]}>
                    {strings.debitCard}
                  </Text>
                </>
              ) : (
                <>
                  <DebitTabIcon color={colors.switchGrey} height={24} width={24}/>
                    <Text style={[styles.fontStyle,{color: colors.switchGrey}]}>
                      {strings.debitCard}
                  </Text>
                </>
              );
            },
          }}
        />
        <BottomTabs.Screen
              name={strings.payments}
              component={BlankScreen}
              options={{   
                tabBarIcon: function tabIcon({focused}) {
                  return (
                    <>             
                      <Icon source={require('../assets/images/Payment.png')} height={24} width={24}/>
                      <Text style={[styles.fontStyle,{color: colors.switchGrey}]}>
                        {strings.payments}
                      </Text>
                    </>
                  )
                },
              }}
        />
          <BottomTabs.Screen
              name={strings.credit}
              component={BlankScreen}
              options={{   
                tabBarIcon: function tabIcon({focused}) {
                  return (
                    <>             
                      <Icon source={require('../assets/images/Credit.png')} height={24} width={24}/>
                      <Text style={[styles.fontStyle,{color: colors.switchGrey}]}>
                        {strings.credit}
                      </Text>
                    </>
                  )
                },
              }}
        />
          <BottomTabs.Screen
              name={strings.profile}
              component={BlankScreen}
              options={{   
                tabBarIcon: function tabIcon({focused}) {
                  return (
                    <>             
                      <Icon source={require('../assets/images/Account.png')} height={24} width={24}/>
                      <Text style={[styles.fontStyle,{color: colors.switchGrey}]}>
                        {strings.profile}
                      </Text>
                    </>
                  )
                },
              }}
        />
       
      </BottomTabs.Navigator>
  </NavigationContainer>
);


const styles = StyleSheet.create({
  fontStyle : {
    fontSize : 9,
    fontFamily : 'AvenirNext-DemiBold'
  }
});