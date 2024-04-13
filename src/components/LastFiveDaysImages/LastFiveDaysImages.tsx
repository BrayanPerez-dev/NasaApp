import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PostImage as PostImageTypes} from '../../types'
import TodaysImage from '../TodaysImage'
import PostImage from '../PostImage'

const LastFiveDaysImages: FC<PostImageTypes[]> = (postImages) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
         {Object.values(postImages).map((item)=>(
          <PostImage {...item} key={`post-image-${item.title}`}/>
        ))} 
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     marginVertical:8
  },
  content:{
    paddingHorizontal:24
  },
  title:{
    color:'#fff',
    fontSize:16,
    marginBottom:18
  }
})
export default LastFiveDaysImages