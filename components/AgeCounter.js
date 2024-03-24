import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

function AgeCounter() {
    const[age,setAge] = useState(30);

    function IncreaseAge() {
        setAge(age + 1);
        }
      return (
        <View>
            <TouchableOpacity style = {{backgroundColor: "skyblue", margin: 20, padding: 20}} onPress={IncreaseAge}><Text>Increase</Text></TouchableOpacity>
            <Text>I am {age} years old</Text>
        </View>
      );
}

export default AgeCounter