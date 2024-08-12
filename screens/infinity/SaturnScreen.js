import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SaturnScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Text style={styles.number}>3</Text>
        <Image source={require('../../assets/Saturn.png')} style={styles.planetImage} />
        <Text style={styles.planetName}>Venus</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <View style={styles.videoContainer}>
          <Image source={require('../../assets/Saturn.png')} style={styles.videoImage} />
        </View>
        <Image source={require('../../assets/Saturn.png')} style={styles.rocketImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F3FD',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#3E3A60',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  number: {
    fontSize: 100,
    color: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  planetImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  planetName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3E3A60',
  },
  description: {
    fontSize: 16,
    color: '#7B79A9',
    textAlign: 'center',
    marginVertical: 20,
  },
  videoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  videoImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  rocketImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});

export default SaturnScreen;
