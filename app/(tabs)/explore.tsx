import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFDDC1', dark: '#FFC1C1' }} 
      headerHeight={200} 
      headerImage={
        <Image
          source={require('@/assets/images/love.jpeg')} // Gambar header
          style={styles.headerImage}
          resizeMode="cover" // Menyesuaikan gambar agar memenuhi area header
        />
      }
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Biodata</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>Nama: Inola Afdholiana</Text>
          <Text style={styles.text}>NPM: 223510839</Text>
          <Text style={styles.text}>Kelas: 5B</Text>
          <Text style={styles.text}>Jurusan: Teknik Informatika</Text>
          <Text style={styles.text}>Universitas: Universitas Islam Riau</Text>
        </ScrollView>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%', 
    height: '100%', 
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'pink', 
    padding: 20,
    marginHorizontal: 16,
    marginTop: 20, 
    borderRadius: 8, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#353535',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 12, 
  },
  scrollView: {
    paddingBottom: 20, 
  },
});
