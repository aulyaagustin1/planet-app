import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const InfinityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Space Explore</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Image source={require('../assets/Saturn.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      <ScrollView 
  horizontal 
  pagingEnabled 
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.scrollViewContent}
>
  <TouchableOpacity 
    style={styles.card}
    onPress={() => navigation.navigate('Saturn')}
  >
    <Image source={require('../assets/Saturn.png')} style={styles.planetImage} />
    <Text style={styles.planetName}>Mercury</Text>
    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={styles.card}
    onPress={() => navigation.navigate('Saturn')} 
  >
    <Image source={require('../assets/Saturn.png')} style={styles.planetImage} />
    <Text style={styles.planetName}>Venus</Text>
    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={styles.card}
    onPress={() => navigation.navigate('Saturn')}
  >
    <Image source={require('../assets/Saturn.png')} style={styles.planetImage} />
    <Text style={styles.planetName}>Earth</Text>
    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </TouchableOpacity>
</ScrollView>


      <TouchableOpacity style={styles.arrowButton}>
        <Text style={styles.arrowText}>→</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Joen, Anne, Oggei and 7 friends are Online</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D47A1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  menuButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    width: width * 0.75,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  planetImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  planetName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 80,
    left: (width / 2) - 25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  arrowText: {
    fontSize: 24,
    color: '#fff',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default InfinityScreen;
