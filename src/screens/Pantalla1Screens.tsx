import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View, Image, StyleSheet, ImageBackground, StatusBar } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../theme/app.theme';
import { ButtonComponent } from '../components/ButtonComponents';

export const Pantalla1Screens = ({ navigation }: any) => {

    return (
        <View style={styles.globalMargin}>
            
            <Text style={styles.title}> Bienvenido</Text>
            <View style={styles.container}>
                <ImageBackground
                    source={{ uri: 'https://img.freepik.com/foto-gratis/fondo-pantalla-patron-fondo-abstracto-grunge-negro-foto-gratis_1340-33848.jpg?w=740&t=st=1722917409~exp=1722918009~hmac=9f2c141fd0f7d49de747e91d296b9214645712431a16eba9da90888814ee89f2' }}
                    style={styles.fondo}
                />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://www.equipo360.com/wp-content/uploads/2021/05/illuminated-3271512_1280.jpg'
                    }} />
            </View>
            <ButtonComponent textButton="Imagen 1" onPress={() => navigation.navigate('Pantalla2')} />
            <ButtonComponent textButton="Imagen 2" onPress={() => navigation.navigate('Pantalla3')} />
            <ButtonComponent textButton=">=" onPress={() => navigation.navigate('Pantalla4')} />
            <ButtonComponent textButton="<=" onPress={() => navigation.navigate('Pantalla5')} /> 
        </View>
    )
}