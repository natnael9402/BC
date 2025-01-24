import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const name = 'Natnael A'

  const getZodiac = () => {
    return '♋☀️ ♐🌖'
  }

  const renderIcons = () => {
    return <View style={{flexDirection: 'row', marginVertical: 10, gap: 10}}>
    <AntDesign name="github" size={35} color="black" />
    <FontAwesome6 name="telegram" size={35} color="blue" />
    <FontAwesome6 name="whatsapp" size={35} color="green" />
    </View>
  }

 const onPre = () => {
      Linking.openURL("mailto:natty.natty9402@gmail.com")
  }

  return (
    
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>


    <Image source={{uri: 'https://i.pinimg.com/736x/d9/b2/ae/d9b2ae0fe14dfa1830cdfefb001944b0.jpg'}} style={{width: '100%', aspectRatio: 16/9}}/>


      <Image source={{uri: 'https://i.pinimg.com/736x/de/50/5a/de505add5e74cfe52ce5172e2e93da5e.jpg'}} style={{ width: 100, height: 100, borderRadius: 35, borderWidth: 5, borderColor: "#fff", marginTop: -50 }}/>

      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
      <Text>{getZodiac()}</Text>

      {renderIcons()}
      
      
      <Button title='Contact Me' onPress={onPre}/>
      

      <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
    aliquam sem et tortor consequat id porta nibh. Pellentesque nec
    nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
    gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
    in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
    pellentesque. Sagittis orci a scelerisque purus semper eget duis
    at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
    Duis at Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Ratione, a excepturi quidem eos iusto possimus molestiae, aut sapiente
      recusandae molestias culpa et. Quisquam autem ab omnis deleniti
       voluptate, doloremque error!
  </Text>

      <StatusBar style="light" />
    </View>
    </ScrollView>
</SafeAreaView>
    </SafeAreaProvider>
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
