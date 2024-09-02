import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet,Image } from 'react-native';


const App = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kmh, setKmh] = useState('');
  const [mph, setMph] = useState('');

  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
  const kmhToMph = (kmh) => kmh * 0.621371;

  const handleCelsiusToFahrenheit = () => {
    const result = celsiusToFahrenheit(parseFloat(celsius));
    setFahrenheit(result.toFixed(4));
  };

  const handleKmhToMph = () => {
    const result = kmhToMph(parseFloat(kmh));
    setMph(result.toFixed(4));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculadora</Text>
      </View>
          <View style={{ alignItems: 'center', marginTop:20}}>
        <Image
          source={{ uri: 'https://a.espncdn.com/i/teamlogos/soccer/500-dark/2026.png' }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={styles.converter}>
        <Text style={styles.title}>Temperatura ºC para ºF</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={celsius}
          onChangeText={setCelsius}
          placeholder="Digite o valor em ºC"
        />
        <Button title="Converter" onPress={handleCelsiusToFahrenheit} color="#cc0000"/>
        {fahrenheit !== '' && <Text style={styles.result}>Resultado: {fahrenheit} ºF</Text>}
      </View>
      <View style={styles.converter}>
        <Text style={styles.title}>Velocidade de km/h para mph</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={kmh}
          onChangeText={setKmh}
          placeholder="Digite o valor em km/h"
        />
        <Button title="Converter" onPress={handleKmhToMph} color="#cc0000" />
        {mph !== '' && <Text style={styles.result}>Resultado: {mph} mph</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#cc0000',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  converter: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  result: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default App;
