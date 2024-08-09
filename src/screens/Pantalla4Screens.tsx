import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { styles } from '../../theme/app.theme'
import { InputComponents } from '../components/InputComponents'
import { ButtonComponent } from '../components/ButtonComponents'

export const Pantalla4Screens = () => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [result, setResult] = useState<string> (''); 

    const divide = () => {

        if (parseFloat(num1) >= parseFloat(num2)) {
            setResult('El primer numero es mayor o igual que el segundo');
          } 
          else {
            setResult('El primer numero no es mayor o igual que el segundo');
          }
        };
    
    return (
        <View >
            <StatusBar backgroundColor='#0d0830' />
            <Text style={styles.title}>Formulario 1 </Text>

            <View style={styles.contentInput}>
                <InputComponents input='Numero 1' value={num1} onChange={setNum1} />
                <InputComponents input='Numero 2' value={num2} onChange={setNum2} />
            </View >
            <ButtonComponent textButton='> =' onPress={divide} />
            {result ? <Text style={styles.result}>{result}</Text> : null}

        </View>
    )
};