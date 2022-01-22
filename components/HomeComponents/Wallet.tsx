import React from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native'

const Wallet = () => {
    return (
        <ImageBackground source={require("../../assets/images/pattern.png")} style={styles.container}>
            <Text style={styles.balance}>Wallet Balance</Text>
            <Text style={styles.amount}>₦0</Text>
            <ImageBackground style={{height: 44, width: 282, alignItems:"center"}} source={require("../../assets/images/textBack.png")}>
                <Text style={styles.withdraw}>Withdraw</Text>
            </ImageBackground>
        </ImageBackground>
    )
}

export default Wallet

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        backgroundColor: "#219653",
        marginHorizontal: 20,
        alignItems: "center",
        height: 190,
        marginBottom: 36
    },
    balance:{
        color:"#E5E5E5",
        fontSize: 14,
        marginTop: "auto",
        marginBottom: 20
    },
    amount:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: "auto"
    },
    withdraw:{
        color: "#fff",
        padding: 10
    }
})
