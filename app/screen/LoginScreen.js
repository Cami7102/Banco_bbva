import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [cuenta, setCuenta] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aquí podrías agregar la lógica de autenticación del usuario
    if (cuenta && contrasena) {
      navigation.navigate('Home'); // Navega a Home
    } else {
      alert('Por favor, ingresa tu cuenta y contraseña');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cuenta"
        placeholderTextColor="#000000"
        value={cuenta}
        onChangeText={setCuenta}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#000000"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => alert('Funcionalidad en desarrollo')}>
        <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SignUp')} // Navega a SignUp
        >
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centra horizontalmente
    padding: 20,
    backgroundColor: '#072145',
  },
  input: {
    height: 40,
    width: '50%',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000000',
  },
  linkText: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center', // Centra los botones horizontalmente
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    height: 50,
    width: 150, // Tamaño fijo para los botones
    backgroundColor: '#fff', // Color de fondo del botón
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#000000', // Color del texto del botón
    fontSize: 16,
    fontWeight: 'bold',
  },
});
