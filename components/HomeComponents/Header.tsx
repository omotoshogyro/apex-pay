import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import NotificationIcon from '../../assets/icons/NotificationIcon';
import { COLORS, FONTS, SIZES, icons } from "../../constants";

const Header = ({maintext, subtext, icon}:any) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>{maintext}</Text>
                <Text style={styles.caption}>{subtext}</Text>
            </View>
            {icon && <NotificationIcon />}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "flex-start",
        marginTop: 40,
        marginBottom: 28,
        color:"#4F4F4F"
    },
    caption:{
        fontSize: 16, ...FONTS.regular
    },
    heading:{
        fontSize: 36,
        color:"#333333",
        fontWeight:"bold",
        marginBottom: 6,
        ...FONTS.bold
    }
})
