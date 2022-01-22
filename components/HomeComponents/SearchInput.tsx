import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import SearchIcon from '../../assets/icons/SearchIcon'

const SearchInput = () => {
    return (
        <View style={styles.container}>
            <SearchIcon />
            <TextInput style={styles.input} placeholder="Search for giftcard" />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: "center",
        backgroundColor: "#EFFAF4",
        padding: 28,
        borderRadius: 20
    },
    input:{
        paddingLeft: 14,
        fontSize: 16
    }
}) 
