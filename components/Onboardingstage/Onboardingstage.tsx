import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

import styles from '../../screens/Onboarding/Onboarding.styles';
import { COLORS, FONTS, SIZES } from '../../constants';

const Onboardingstage = ({item}: any) => {
  return (
    <View style={{flex: 1,width: SIZES.width, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{marginBottom:58}}>
        {item.image}
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>

      <Text style={{fontSize: 24, ...FONTS.bold, marginBottom: 12, color: COLORS.grey1}}>{item.header}</Text>
      <Text style={{fontSize: 14,...FONTS.regular,  textAlign: 'center', paddingRight: 57, paddingLeft: 67, color: COLORS.grey1}}>{item.information}</Text>
      </View>
    </View>
  );
};

export default Onboardingstage;