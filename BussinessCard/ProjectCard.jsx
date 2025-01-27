import { View, Text, Image } from "react-native"

const ProjectCard = ({image, text}) => {
    return (
      <View>
        <Image source={image} style={{ height: 150, aspectRatio: 16 / 9, borderRadius: 10 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'dimgrey', marginTop: 10 }}>{text}</Text>
      </View>
    )
  }

export default ProjectCard