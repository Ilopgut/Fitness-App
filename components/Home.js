import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image,TouchableOpacity  } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
             <Image
                source={require('../assets/active-lifestyle.png')} // Asegúrate de tener tu imagen en assets
                style={styles.image}
                resizeMode="contain"
             />
        </View>

    <View style={styles.contentContainer}>
        <Text style={styles.title}>Track your Active Lifestyle</Text>
        <Text style={styles.subtitle}>Find your way to the perfect body</Text>

        {/* Indicadores de página */}
        <View style={styles.paginationContainer}>
           <View style={[styles.paginationDot, styles.paginationDotActive]} />
           <View style={styles.paginationDot} />
           <View style={styles.paginationDot} />
           <View style={styles.paginationDot} />
        </View>

        {/* Botón de inicio */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
        >
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF', // Color de fondo azul claro
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:150,
  },
  contentContainer: {
    flex: 0.4,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#FF6B6B', // Color naranja del punto activo
    width:15,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 15,
    width:'60%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
