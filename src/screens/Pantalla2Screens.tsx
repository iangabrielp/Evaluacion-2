import React from 'react'
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import { styles } from '../../theme/app.theme'

export const Pantalla2Screens = () => {
  return (
    <View style={styles.globalMargin}>
        <StatusBar backgroundColor='#0d0830' />
        <Text style={styles.title}> Aqui vamos a poner nuestra primera imagen </Text>
        <View style={styles.container}>
                <ImageBackground
                    source={{ uri: 'https://d1mcnsx8pzqfds.cloudfront.net/wp-content/uploads/2022/07/What-is-Load-testing--1080x675.jpeg'}}
                    style={styles.fondo}
                />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6r3DXVLPwdjgBSJiz-pro8eJ8GLi7c11sv4y2AvwmoXskEDQXJKos-st2jQSUgdqc1zM&usqp=CAU'
                    }} />
            </View>
    </View>
  )
}
