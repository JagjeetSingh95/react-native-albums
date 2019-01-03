import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
            <Image 
               style={styles.thumbnailStyle} 
               source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
           <Text>{title}</Text>
           <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image 
             style={styles.imageStyle}
             source={{ uri: image }}
            />
      </CardSection>
      <CardSection>
          <Button onPress={() => Linking.openURL(url)} text="Buy Now" />
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 10,
     marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
})

export default AlbumDetails;