import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function App() {

 const onPre = () => {
      Linking.openURL("mailto:natty.natty9402@gmail.com")
  }

  return (
    
    <View style={styles.container}>

    <Image source={{uri: 'https://i.pinimg.com/736x/ea/d1/bc/ead1bc074a9fdb2c0f0a409a73d5cdb0.jpg'}} style={{width: '100%', aspectRatio: 16/9}}/>


      <Image source={{uri: 'https://i.pinimg.com/736x/de/50/5a/de505add5e74cfe52ce5172e2e93da5e.jpg'}} style={{ width: 150, height: 150, borderRadius: 75, borderWidth: 5, borderColor: "#fff", marginTop: -75 }}/>

      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Natnael Araya</Text>
      <Text>♋☀️ ♐🌖</Text>


      <View style={{flexDirection: 'row', marginVertical: 10, gap: 10}}>
      <AntDesign name="github" size={35} color="black" />
      <FontAwesome6 name="telegram" size={35} color="blue" />
      <FontAwesome6 name="whatsapp" size={35} color="green" />
      </View>
      
      <Button title='Contact Me' onPress={onPre}/>
      
      <ScrollView showsVerticalScrollIndicator={false}>

      <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
    aliquam sem et tortor consequat id porta nibh. Pellentesque nec
    nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
    gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
    in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
    pellentesque. Sagittis orci a scelerisque purus semper eget duis
    at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
    Duis at
  </Text>

    </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
