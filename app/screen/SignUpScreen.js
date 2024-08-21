import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [ci, setCI] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Aquí podrías agregar la lógica para registrar al usuario
    if (nombre && apellidos && ci && celular && email && password && confirmPassword) {
      if (password === confirmPassword) {
        Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada correctamente');
        navigation.navigate('Login'); // Navega de vuelta a Login
      } else {
        Alert.alert('Error', 'Las contraseñas no coinciden');
      }
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre(s)"
        placeholderTextColor="#000000"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido(s)"
        placeholderTextColor="#000000"
        value={apellidos}
        onChangeText={setApellidos}
      />

      <TextInput
        style={styles.input}
        placeholder="CI"
        placeholderTextColor="#000000"
        value={ci}
        onChangeText={setCI}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Celular"
        placeholderTextColor="#000000"
        value={celular}
        onChangeText={setCelular}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#000000"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        placeholderTextColor="#000000"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#072145',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  input: {
    width: '50%',
    height: 50,
    backgroundColor: '#ffffff', 
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#000000',
  },
  button: {
    width: '20%',
    height: 50,
    backgroundColor: '#ffffff', 
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
