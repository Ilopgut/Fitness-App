import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

import { useState } from 'react';

export default function FindYourActivity({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{fontSize: 32}}>Find your</Text>
        <Text style={styles.title}>
          activity
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >

          <TouchableOpacity
              style={[styles.categoryTab]}>
              <Text style={[styles.categoryText,
              styles.categoryTabActive,
              styles.categoryTextActive]}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.categoryTab]}>
              <Text style={[styles.categoryText]}>Moderate</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.categoryTab]}>
              <Text style={[styles.categoryText]}>Intensive</Text>
          </TouchableOpacity>

        </ScrollView>

        <View style={styles.activitiesContainer}>
          <View style={styles.card}>
              <View style={styles.cardImageContainer}>
                <Image
                  source={require('../assets/swimming.png')}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>swimming</Text>
                <View style={styles.kcalContainer}>
                  <Text style={styles.emojiText}>🔥</Text>
                  <Text style={styles.kcalText}>430 kcal/hr</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardImageContainer}>
                  <Image
                    source={require('../assets/tennis.png')}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>tennis</Text>
                  <View style={styles.kcalContainer}>
                    <Text style={styles.emojiText}>🔥</Text>
                    <Text style={styles.kcalText}>430 kcal/hr</Text>
                  </View>
                </View>
              </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
            <View style={{backgroundColor:'black',borderRadius:50,padding:10}}><Feather name="home" color="#ffffff" size={30} /></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('UserInfo')}>
            <Entypo name="line-graph" color="#000000" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Feather name="calendar" color="#000000" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Entypo name="sound-mix" color="#000000" size={30} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
  },
  categoryTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  categoryText: {
    color: '#666',
    fontSize: 16,
  },
  categoryTextActive: {
    color: '#000',
    fontWeight: '600',
  },
  activitiesContainer: {
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImageContainer: {
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  kcalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiText: {
    fontSize: 16,
    marginRight: 4,
  },
  kcalText: {
    color: '#666',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
});
