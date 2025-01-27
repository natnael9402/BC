import { View, Text, Image, StyleSheet } from "react-native"

const ProjectCard = ({image, text}) => {
    return (
      <View>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{text}</Text>

        
      </View>
    )
  }


  const styles = StyleSheet.create({
    image: {
        height: 150,
        aspectRatio: 16 / 9,
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'dimgrey',
        marginTop: 10
    }
  })

export default ProjectCard