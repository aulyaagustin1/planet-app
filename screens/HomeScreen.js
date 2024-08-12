import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, ImageBackground } from 'react-native';

const HomeScreen = ({navigation}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground 
      source={require('../assets/hero-bg.webp')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.planetTitle}>
          <Text style={styles.title}>Solar System</Text>
        </View>
        <View style={styles.planetRow}>
          <TouchableOpacity 
            style={styles.planetContainer}
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.Image 
              source={require('../assets/Saturn.png')} 
              style={[styles.planetImage, { transform: [{ scale: scaleAnim }] }]} 
            />
            <Text style={styles.planetName}>Saturn</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.planetContainer}
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.Image 
              source={require('../assets/Saturn.png')} 
              style={[styles.planetImage, { transform: [{ scale: scaleAnim }] }]} 
            />
            <Text style={styles.planetName}>Saturn</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.planetContainer}
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.Image 
              source={require('../assets/Saturn.png')} 
              style={[styles.planetImage, { transform: [{ scale: scaleAnim }] }]} 
            />
            <Text style={styles.planetName}>Saturn</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Infinity')}>
          <Text style={styles.buttonText}>To infinity</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AndBeyond')}>
          <Text style={styles.subButtonText}>and beyond</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  planetTitle: {
    justifyContent: 'center',
    padding: 40,
    width: '100%',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  planetRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    columnGap: 20,
  },
  planetContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
  },
  planetImage: {
    width: 100,
    height: 100,
    left:20,
    bottom: 20,
  },
  planetName: {
    fontSize: 16,
    fontWeight: 'bold',
    bottom: 10,
    right:10 

  },
  button: {
    backgroundColor: '#FFC107',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: 'center',
    marginTop: 40,
    width: '90%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
    subButtonText: {
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 17,
        color: 'white',
    },
});

export default HomeScreen;
