import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';

function Connection({ navigation }) {
  const wifiSSID = 'ARC_EM9D'; // Replace with the actual Wi-Fi SSID of the board
  
  const handleConnectPress = async () => {
    try {
      // Check if the device is already connected to the "ARC EM9D" network
      const currentSSID = await WifiManager.getCurrentWifiSSID();
      if (currentSSID === 'ARC EM9D') {
        console.log('Device is already connected to the "ARC EM9D" network');
        return;
      }
  
      // Connect to the "ARC EM9D" network
      await WifiManager.connectToSSID('ARC EM9D', '', true);
      console.log('Connected to "ARC EM9D" network');
    } catch (error) {
      console.log('Error connecting to "ARC EM9D" network:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect to Wi-Fi</Text>
      <Text style={styles.subtitle}>Connect to {wifiSSID}</Text>
      <Text style={styles.paragraph}>
        To use WOLO, you need to connect to the Wi-Fi network of the embedded board "ARC EM9D". Follow these steps to connect:
      </Text>
      <Text style={styles.listItem}>
        1. Open the Wi-Fi settings on your phone.
      </Text>
      <Text style={styles.listItem}>
        2. Select the Wi-Fi network "{wifiSSID}" from the list of available networks.
      </Text>
      <Text style={styles.listItem}>
        3. Enter the password for the Wi-Fi network, if prompted.
      </Text>
      <Button
        title="Connect"
        onPress={handleConnectPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },
});

export default Connection;
