import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Switch} from 'react-native';
import colors from '../constants/colors';

const ListItem = ({name,description,icon,isSwitch,action,isSet}) => {

  return (
    <View style={styles.mainView}>
        <Image style={styles.image} source={icon}></Image>
        <View style={styles.detailView}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
        { isSwitch && 
            <View style={styles.switchView}>
                <Switch
                        trackColor={{ false: colors.switchGrey, true: colors.greenMain }}
                        thumbColor={isSet ?  colors.white : colors.white}
                        ios_backgroundColor={colors.switchGrey}
                        onValueChange={action}
                        value={isSet}
                    />
            </View>
        }
    </View>
  );
};

const styles = StyleSheet.create({
mainView:{
    height : 60,
    marginBottom : 10,
    flexDirection : 'row',
    alignItems : 'center',
},
image :{
    height : 32,
    width : 32,
    borderRadius : 16,
    backgroundColor : colors.blueMain
},
detailView : {
    marginHorizontal : 10
},
nameText :{
    fontSize : 14,
    color : colors.blueText,
    fontFamily:'AvenirNext-Medium'
},
descriptionText:{
    fontSize : 13,
    color : colors.greyText,
    opacity : 0.4,
    fontFamily:'AvenirNext-Medium'
},
switchView :{
    justifyContent : 'center',
    alignItems : 'center',
    marginRight : 0
}
});

export default ListItem;
