import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

const AmountItem = ({amount, setAmount}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={setAmount}>
        <Text style={styles.amountText}>{`S$ `}{amount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
mainView:{
    height : 40,
    alignItems : 'center',
    backgroundColor : colors.greenOp7,
    flex : 0.3,
    justifyContent : 'center'
},
amountText:{
    fontSize : 12,
    lineHeight : 16,
    color : colors.greenMain,
    marginLeft : 5,
    fontWeight : 'bold',
    fontFamily:'AvenirNext-Bold'
}
});

export default AmountItem;
