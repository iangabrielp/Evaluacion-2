import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../theme/app.theme'
import { InputComponents } from '../components/InputComponents'
import { ButtonComponent } from '../components/ButtonComponents'

export const Pantalla5Screens = () => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);

    const divide = () => {
        if (parseFloat(num1) <= parseFloat(num2)) {
            setResult('el primer numero es menor o igual que el segundo');
          } else {
            setResult('eL primer numero no es menor o igual que el segundo');
          }
        };
    
  return (
    <View>
       <StatusBar backgroundColor='#0d0830' />
        <Text style={styles.title}>Formulario 2 </Text>
      
      <View style={styles.contentInput}>
        <InputComponents input='Numero 1' value={num1} onChange={setNum1} />
        <InputComponents input='Numero 2' value={num2} onChange={setNum2}/>
      </View >
      <ButtonComponent textButton=' < = ' onPress={divide} />
      {result !== null && <Text style={styles.result}> Total: {result}</Text>}
      
    </View>
  )
}