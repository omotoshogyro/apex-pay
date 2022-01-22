import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import { Header, SearchInput } from '../../components'
import giftcardsdata from '../../helpers/giftcardsdata'

const width = Dimensions.get("window").width - 60
const GiftCards = () => {
    return (
        <View style={styles.container}>
            <Header 
                maintext="Sell Gift Card" 
                subtext="What kind of Gift Card would you like to sell?"
            />
            <SearchInput />
            <FlatList style={{paddingHorizontal: 20, marginTop: 36}} data={giftcardsdata} 
                numColumns={2}
                columnWrapperStyle={{justifyContent:"space-between"}}
                renderItem={({item})=>{
                return (<View style={styles.card}>
                        {item.image}
                        <Text>{item.name}</Text>
                    </View>)
                }} 
            />
        </View>
    ) 
}

export default GiftCards

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex: 1
    },
    card:{
        width: width/2,
        backgroundColor: "#EFFAF4",
        alignItems: "center",
        borderRadius: 20,
        padding: 20,
        marginBottom: 23
    }
})
