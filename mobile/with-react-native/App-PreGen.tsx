import Config from 'react-native-config';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  CapsuleMobile,
  Environment,
  WalletType,
} from '@usecapsule/react-native-wallet';
import {PregenIdentifierType} from '@usecapsule/core-sdk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

const capsuleClient = new CapsuleMobile(
  Environment.BETA,
  Config.CAPSULE_API_KEY,
  undefined,
  {
    disableWorkers: true,
  },
);

export const PregenAuth = () => {
  const [authStage, setAuthStage] = useState('initial');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const initCapsule = async () => {
      await capsuleClient.init();
    };
    initCapsule();
  }, []);

  const handleSignUp = async () => {
    try {
      setError('');

      const pregenExists = await capsuleClient.hasPregenWallet(
        email,
        PregenIdentifierType.EMAIL,
      );

      if (pregenExists) {
        setError('User already exists. Please sign in instead.');
        return;
      }

      const wallet = await capsuleClient.createWalletPreGen(
        WalletType.EVM,
        email,
        PregenIdentifierType.EMAIL,
      );

      const userShare = capsuleClient.getUserShare();

      if (userShare) {
        const encryptedUserShare = CryptoJS.AES.encrypt(
          userShare,
          password,
        ).toString();

        await AsyncStorage.setItem('userShare', encryptedUserShare);

        setAuthStage('authenticated');
      } else {
        setError('Failed to retrieve user share.');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      setError('Sign up failed. Please try again.');
    }
  };

  const handleSignIn = async () => {
    try {
      setError('');

      const pregenExists = await capsuleClient.hasPregenWallet(
        email,
        PregenIdentifierType.EMAIL,
      );

      if (!pregenExists) {
        setError('User does not exist. Please sign up.');
        return;
      }

      const encryptedUserShare = await AsyncStorage.getItem('userShare');

      if (!encryptedUserShare) {
        setError('No user share found. Please sign up.');
        return;
      }

      const decryptedBytes = CryptoJS.AES.decrypt(encryptedUserShare, password);
      const decryptedUserShare = decryptedBytes.toString(CryptoJS.enc.Utf8);

      if (!decryptedUserShare) {
        setError('Invalid password. Please try again.');
        return;
      }

      await capsuleClient.setUserShare(decryptedUserShare);

      setAuthStage('authenticated');
    } catch (error) {
      console.error('Sign in error:', error);
      setError('Sign in failed. Please try again.');
    }
  };

  const renderContent = () => {
    switch (authStage) {
      case 'initial':
        return (
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignIn}
              disabled={!email.trim() || !password.trim()}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={handleSignUp}
              disabled={!email.trim() || !password.trim()}>
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        );
      case 'authenticated':
        return (
          <View>
            <Text style={styles.successText}>You are now authenticated.</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Pregen Authentication</Text>
        {renderContent()}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#333',
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryButtonText: {
    color: '#007AFF',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
  successText: {
    fontSize: 18,
    color: '#4CD964',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PregenAuth;
