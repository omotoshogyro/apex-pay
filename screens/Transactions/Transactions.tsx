import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Box from '../../assets/icons/Box';
import Filter from '../../assets/icons/Filter'
import { COLORS, FONTS, SIZES, icons } from "../../constants"; 
const Transactions = () => {
    const [activetab, setActivetab] = useState(0)
    const handleStyle = (index:number)=>{
        if(index === activetab){
            return styles.activetab
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.topheader}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Transactions</Text>
                    <Filter />
                </View>
                <View style={styles.tabnav}>
                    <TouchableOpacity style={[styles.tab,handleStyle(0)]} onPress={()=>setActivetab(0)}>
                        <Text style={styles.tabtext}>Gift Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tab,handleStyle(1)]} onPress={()=>setActivetab(1)}>
                        <Text style={styles.tabtext}>Withdrawals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tab,handleStyle(2)]} onPress={()=>setActivetab(2)}>
                        <Text style={styles.tabtext}>Funds</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottom}>
                <Box/>
                <Text style={styles.bottomHeader}>Wow! No Transactions Yet</Text>
                <Text style={styles.bottomText}>Start trading giftcards, so you can get a record of all your transactions here.</Text>
            </View>
        </View>
    )
}

export default Transactions

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    topheader:{
        backgroundColor:"#219653",
        padding: 20,
        height: 253,
        justifyContent:"space-between"
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:40
    },
    headerText:{
        color:"#fff",
        fontSize: 36,
        ...FONTS.bold
    },
    tabnav:{
        backgroundColor: "#1B8047",
        flexDirection:"row",
        padding: 6,
        borderRadius:12,
        justifyContent: "space-between"
    },
    tab:{
        padding: 15,
        borderRadius:10,
        flex: 1,
        alignItems:"center"
    },
    activetab:{
        backgroundColor: "#219653",
    },
    tabtext:{
        color: "#fff",
    },
    bottom:{
        flex: 1,
        padding:40,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    bottomHeader:{
        marginTop: 38,
        color:"#6FCF97",
        ...FONTS.bold,
        fontSize: 24
    },
    bottomText:{
        color:"#6FCF97",
        textAlign: "center",
        marginTop: 14,
        fontSize: 16,
        lineHeight: 25
    }
})
