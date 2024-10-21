import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PolyfillCrypto from 'react-native-webview-crypto';
import Config from 'react-native-config';
import {CapsuleMobile, Environment} from '@usecapsule/react-native-wallet';
import {webcrypto} from 'crypto';

const capsuleClient = new CapsuleMobile(
  Environment.BETA,
  Config.CAPSULE_API_KEY,
  undefined,
  {
    disableWorkers: true,
  },
);

function App(): React.JSX.Element {
  const [authStage, setAuthStage] = useState('initial');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const initCapsule = async () => {
      try {
        await capsuleClient.init();
      } catch (error) {
        console.error('Error initializing Capsule:', error);
        setError('Failed to initialize. Please try again.');
      }
    };
    initCapsule();
  }, []);

  const handleCreateAccount = async () => {
    try {
      setError('');
      const userExists = await capsuleClient.checkIfUserExists(email);
      if (userExists) {
        setError('User already exists. Please login instead.');
        return;
      }
      await capsuleClient.createUser(email);
      setAuthStage('verification');
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Failed to create account. Please try again.');
    }
  };

  const handleVerifyCode = async () => {
    try {
      setError('');
      const biometricsId = await capsuleClient.verifyEmailBiometricsId(
        verificationCode,
      );
      console.log('Biometrics ID', biometricsId);

      await capsuleClient.registerPasskey(
        email,
        biometricsId,
        crypto as webcrypto.Crypto,
      );

      const {wallets, recoverySecret} =
        await capsuleClient.createWalletPerType();
      console.log('wallets', wallets);
      console.log('recoverySecret', recoverySecret);
      setAuthStage('authenticated');
    } catch (error) {
      console.error('Error verifying code:', error);
      setError('Failed to verify code. Please try again.');
    }
  };

  const handleLoginWithPasskey = async () => {
    try {
      setError('');
      const userExists = await capsuleClient.checkIfUserExists(email);
      if (!userExists) {
        setError('User does not exist. Please create an account.');
        return;
      }
      const wallets = await capsuleClient.login();
      console.log('wallets', wallets);
      setAuthStage('authenticated');
    } catch (error) {
      console.error('Error during passkey authentication:', error);
      setError('Login failed. Please try again.');
    }
  };

  const handleGetWallets = () => {
    const wallets = capsuleClient.getWallets();
    console.log(wallets);
    Alert.alert('Wallets', JSON.stringify(wallets, null, 2));
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
            <TouchableOpacity
              style={styles.button}
              onPress={handleLoginWithPasskey}
              disabled={!email.trim()}>
              <Text style={styles.buttonText}>Login with Passkey</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={handleCreateAccount}
              disabled={!email.trim()}>
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        );
      case 'verification':
        return (
          <View>
            <Text style={styles.label}>Verification Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter verification code"
              value={verificationCode}
              onChangeText={setVerificationCode}
              keyboardType="number-pad"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleVerifyCode}
              disabled={!verificationCode.trim()}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        );
      case 'authenticated':
        return (
          <View>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <TouchableOpacity style={styles.button} onPress={handleGetWallets}>
              <Text style={styles.buttonText}>Get Wallets</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PolyfillCrypto />
      <View style={styles.content}>
        <Text style={styles.title}>Capsule Wallet</Text>
        {renderContent()}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 32,
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default App;
