import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import CardIcon from '../../assets/icons/CardIcon'
import TicketIcon from '../../assets/icons/TicketIcon'
import UpArrowIcon from '../../assets/icons/UpArrowIcon'
import ListIcon from './ListIcon'

const Actions = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Pending Actions</Text>
            <View style={styles.list}>
                <View style={styles.item}>
                    <ListIcon />
                    <Text style={styles.itemText}>Update your profile</Text>
                </View>
                <View style={styles.item}>
                    <ListIcon />
                    <Text style={styles.itemText}>Create Transaction PIN</Text>
                </View>
                <View style={styles.item}>
                    <ListIcon />
                    <Text style={styles.itemText}>Add your Bank account</Text>
                </View>
            </View>
            <Text style={styles.heading}>Get Started with ApexPay</Text>
            <View style={styles.subcontainer}>
                <TouchableOpacity activeOpacity={0.7 } style={styles.giftcard} onPress={()=>navigation.navigate("GiftCard")}>
                    <View>
                        <Text style={styles.giftcardText}>Sell Gift</Text>
                        <Text style={styles.giftcardText}>Card</Text>
                    </View>
                    <CardIcon />
                </TouchableOpacity>
                <View style={styles.ratesDeal}>
                    <View style={[styles.ratebox,styles.rates]}>
                        <View style={styles.ratesDealIcon}>
                            <UpArrowIcon />
                        </View>
                        <Text style={styles.ratesDealText}>High Rate Cards</Text>
                        <Text style={styles.ratesDealsubtext}>See which cards are high now</Text>
                    </View>
                    <View style={[styles.ratebox,styles.deals]}>
                        <View style={styles.ratesDealIcon}>
                            <TicketIcon />
                        </View>
                        <Text style={styles.ratesDealText}>Today’s Deals</Text>
                        <Text style={styles.ratesDealsubtext}>Get sweet bonus on trades</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Actions

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 20
    },
    heading:{
        fontSize: 18,
        marginBottom: 24
    },
    list:{},
    item:{
        flexDirection: "row",
        alignItems: "center",
        padding: 24,
        borderColor: "#EFFAF4",
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 20
    },
    itemText:{
        marginLeft: 22
    },
    subcontainer:{
    },
    giftcard:{
        borderRadius: 20,
        backgroundColor: "#025726",
        flexDirection:"row",
        paddingVertical: 18,
        paddingHorizontal: 31,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    giftcardText:{
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold"
    },
    ratesDeal:{
        flexDirection:"row",
        justifyContent: "space-between"
    },
    ratebox:{
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 31,
        paddingVertical: 36
    },
    rates:{
        backgroundColor:"#6FCF97",
        marginRight: 20
    },
    deals:{
        backgroundColor:"#27AE60"
    },
    ratesDealIcon:{
        width:38,
        height: 38,
        backgroundColor:"#fff",
        borderRadius: 19,
        marginBottom: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    ratesDealText:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 8
    },
    ratesDealsubtext:{
        color: "#fff"
    }
})