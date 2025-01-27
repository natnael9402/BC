import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking, ActivityIndicator } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProjectCard from './ProjectCard';

export default function App() {

  const name = 'Natnael A'

  const links = {
    github: 'github.com/natnael9402',
    telegram: 't.me/natty9402',
    whatsapp: 'wa.me/251900424437'
  }

  const getZodiac = () => {
    return '♋☀️ ♐🌖'
  }

  const renderIcons = () => {
    return <View style={{ flexDirection: 'row', marginVertical: 10, gap: 10 }}>
      {links.github && <AntDesign name="github" size={35} color="black" />}
      {links.telegram && <FontAwesome6 name="telegram" size={35} color="blue" />}
      {links.whatsapp && <FontAwesome6 name="whatsapp" size={35} color="green" />}
    </View>
  }

  const onPre = () => {
    Linking.openURL("mailto:natty.natty9402@gmail.com")
  }


  const isLoading = true
  const likes = 0

 


  return (


    //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //     {/* <ActivityIndicator /> */}
    //     {isLoading ? <Text>Hello World</Text> : <ActivityIndicator />}

    //   <Text>Post has {likes || 'no'} likes</Text>

    //   </View>
    // )

    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>


            <Image source={{ uri: 'https://i.pinimg.com/736x/d9/b2/ae/d9b2ae0fe14dfa1830cdfefb001944b0.jpg' }} style={{ width: '100%', aspectRatio: 16 / 9 }} />


            <Image source={{ uri: 'https://i.pinimg.com/736x/de/50/5a/de505add5e74cfe52ce5172e2e93da5e.jpg' }} style={{ width: 100, height: 100, borderRadius: 35, borderWidth: 5, borderColor: "#fff", marginTop: -50 }} />

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
            <Text>{getZodiac()}</Text>

            {renderIcons()}


            <Button title='Contact Me' onPress={onPre} />


            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20, textAlign: 'center' }}>
              I'm a full stack developers with over 4 years of expirience
            </Text>


            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>Projects</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 10, gap: 10 }}>
              <ProjectCard text={'SOS'} image={require('./assets/projects/project1.jpeg')}/>
              <ProjectCard text={'SOS'} image={require('./assets/projects/project2.jpeg')}/>
              <ProjectCard text={'SOS'} image={require('./assets/projects/project3.jpeg')}/>
              <ProjectCard text={'SOS'} image={require('./assets/projects/project4.jpeg')}/>
              
            </ScrollView>



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
