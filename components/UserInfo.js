import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState } from 'react';


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

const MonthTab = ({ title, isActive, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[
      styles.monthText,
      isActive && styles.monthTextActive
    ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const StatBar = ({ height, color, day }) => (
  <View style={styles.barContainer}>
    <View style={[styles.bar, { height, backgroundColor: color }]} />
    <Text style={styles.dayText}>{day}</Text>
  </View>
);

export default function UserInfo({navigation}) {
  const [activeMonth, setActiveMonth] = useState('April');
  const months = ['April', 'May', 'June', 'July', 'August'];

  const weekData = [
    { day: 'M', height: 75, color: '#4CAF50' },
    { day: 'T', height: 50, color: '#FF5252' },
    { day: 'S', height: 90, color: '#2196F3' },
    { day: 'F', height: 65, color: '#4CAF50' },
    { day: 'T', height: 45, color: '#FF5252' },
    { day: 'S', height: 80, color: '#2196F3' },
    { day: 'W', height: 70, color: '#4CAF50' },
  ];

  return (
    <View style={styles.container}>


      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Adline Castellno</Text>
        <Text style={styles.userLocation}>United States</Text>
      </View>

      <View
        style={styles.monthsScroll}
      >
        {months.map(month => (
          <MonthTab
            key={month}
            title={month}
            isActive={month === activeMonth}
            onPress={() => setActiveMonth(month)}
          />
        ))}
      </View>

      <View style={styles.statisticsContainer}>
        <View style={styles.statisticsHeader}>
          <Text style={styles.statisticsTitle}>Statistics</Text>
          <TouchableOpacity style={styles.periodSelector}>
            <Text style={styles.periodText}>Week</Text>
            <Text>▼</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.graphContainer}>
            {weekData.map((data, index) => (
                <StatBar
                key={index}
                height={data.height}
                color={data.color}
                day={data.day}
                />
            ))}
        </View>
      </View>

        <View style={styles.metricsContainer}>
            <View style={[styles.metricItem, { backgroundColor: '#E8F5E9' }]}>
                <Text style={styles.metricIcon}>🏋️</Text>
                <View>
                    <Text style={styles.metricTitle}>Training</Text>
                    <Text style={styles.metricValue}>4.5 hours</Text>
                </View>
            </View>

            <View style={[styles.metricItem, { backgroundColor: '#FFEBEE' }]}>
                <Text style={styles.metricIcon}>👣</Text>
                <View>
                    <Text style={styles.metricTitle}>Steps</Text>
                    <Text style={styles.metricValue}>24 km per week</Text>
                </View>
            </View>

            <View style={[styles.metricItem, { backgroundColor: '#E3F2FD' }]}>
                <Text style={styles.metricIcon}>🔥</Text>
                <View>
                    <Text style={styles.metricTitle}>Calories</Text>
                    <Text style={styles.metricValue}>8215 calories burned</Text>
                </View>
            </View>
        </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FindYourActivity')}>
            <Feather name="home" color="#000000" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <View style={{backgroundColor:'black',borderRadius:50,padding:10}}><Entypo name="line-graph" color="#ffffff" size={30} /></View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginTop:10,
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userLocation: {
    color: '#666',
  },
  monthsScroll: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  monthText: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: '#666',
  },
  monthTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
  statisticsContainer: {
    padding: 10,
  },
  statisticsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  statisticsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 15,
  },
  periodText: {
    marginRight: 5,
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    marginLeft: 50,
    marginBottom: 30,
    width:'75%',
  },
  barContainer: {
    alignItems: 'center',
    width: 30,
  },
  bar: {
    width: 4,
    borderRadius: 2,
    marginBottom: 5,
  },
  dayText: {
    color: '#666',
  },
  metricsContainer: {
    gap: 15,
    padding: 15,
  },
  metricItem: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  metricIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  metricTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  metricValue: {
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  activeNavItem: {
    color: '#000',
  },
});