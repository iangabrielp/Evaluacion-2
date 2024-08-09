import React from 'react'
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import { styles } from '../../theme/app.theme'

export const Pantalla3Screens = () => {
  return (
    <View style={styles.globalMargin}>
        <StatusBar backgroundColor='#0d0830' />
        <Text style={styles.title}> Aqui vamos a poner nuestra segunda imagen </Text>
        <View style={styles.container}>
                <ImageBackground
                    source={{ uri: 'https://d1mcnsx8pzqfds.cloudfront.net/wp-content/uploads/2022/07/What-is-Load-testing--1080x675.jpeg'}}
                    style={styles.fondo}
                />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5q5Kgr-rXGuHED6EGcw16K6GadlG_qzi0Lr6EhFNyJJp_o3WHe-hTpY7314hzF41wvw&usqp=CAU'
                    }} />
            </View>
    </View>
  )
}