import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Wallet, Actions } from '../../components'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header maintext="Toyosill," subtext="Hello, wash your hands ✋🏻" icon={true}/>
            <Wallet />
            <Actions />
            {/* <Text>home page</Text> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
      },
})
