<<<<<<< HEAD
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES, icons, fontsize } from "../../constants";
import { useNavigation } from "@react-navigation/native";
=======
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES, icons, fontsize } from "../../constants";
>>>>>>> 7d444d28edf76f76ae2bb697668ccb9fa4c8269c

const { Fifthstage } = icons;

const Onboardingend = () => {
<<<<<<< HEAD
  const navigation = useNavigation()
=======
>>>>>>> 7d444d28edf76f76ae2bb697668ccb9fa4c8269c
  return (
    <View
      style={{
        flex: 1,
        width: SIZES.width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ marginBottom: 58 }}>
        <Fifthstage />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 24,
            ...FONTS.bold,
            marginBottom: 12,
            color: COLORS.grey1,
          }}
        >
          Great to Have you!
        </Text>
        <Text
          style={{
            fontSize: 14,
            ...FONTS.regular,
            textAlign: "center",
            paddingRight: 57,
            paddingLeft: 67,
            color: COLORS.grey1,
          }}
        >
          Let’s not keep you waiting! We promise to treat you like a boss that
          you are.
        </Text>
      </View>
      <View>
<<<<<<< HEAD
        <TouchableOpacity onPress={()=>navigation.navigate("HomeNavigator")} style={{backgroundColor: COLORS.green1, paddingVertical: 38, paddingHorizontal: 42, marginTop: 108,  borderRadius: 29}}>
          <Text style={{color: COLORS.white, ...fontsize.smaller, ...FONTS.regular}}>Create an account</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 24, alignItems: 'center'}}>
          <Text style={{color: COLORS.grey4, ...fontsize.smaller}}>I have one.</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("HomeNavigator")}>
            <Text style={{color: COLORS.green1, ...fontsize.smaller, ...FONTS.bold}}>Log me in</Text>
            </TouchableOpacity>
=======
        <View style={{backgroundColor: COLORS.green1, paddingVertical: 38, paddingHorizontal: 42, marginTop: 108,  borderRadius: 29}}>
          <Text style={{color: COLORS.white, ...fontsize.smaller, ...FONTS.regular}}>Create an account</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 24, alignItems: 'center'}}>
          <Text style={{color: COLORS.grey4, ...fontsize.smaller}}>I have one.</Text>
          <Text style={{color: COLORS.green1, ...fontsize.smaller, ...FONTS.bold}}>Log me in</Text>
>>>>>>> 7d444d28edf76f76ae2bb697668ccb9fa4c8269c
        </View>
      </View>
    </View>
  );
};

export default Onboardingend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
