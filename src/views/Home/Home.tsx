import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { StyleSheet, View } from 'react-native'
import fetchApi from '../../utils/fetch'
import TodaysImage from '../../components/TodaysImage'
import { PostImage } from '../../types'
import { format, sub } from 'date-fns'
import LastFiveDaysImage from '../../components/LastFiveDaysImages'

const Home = () => {

  const [todaysImage,setTodaysImage] = useState<PostImage>({})
  const [lastFiveDaysImages,setLastFiveDaysImages] = useState<PostImage[]>([])

  useEffect(() => {
    const loadTodaysImage =  async () =>{
      try {
        const todaysImageResponse = await fetchApi()
        setTodaysImage(todaysImageResponse)
      } catch (error) {
        setTodaysImage({})
        console.error(error)
      }
    }
    const loadLastFiveDaysImages = async () => {
      try {
        const date = new Date()
        const todaysDate = format(date,'yyyy-MM-dd')
        const fiveDaysAgoDate = format(sub(date,{days:5}),'yyyy-MM-dd')
        const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)
        setLastFiveDaysImages(lastFiveDaysImagesResponse)
      } catch (error) {
        console.log(error)
      }
    }
    loadTodaysImage().catch(null)
    loadLastFiveDaysImages().catch(null)
  }, [])
  return (
    <View style={styles.container}>
        <Header />
        <TodaysImage {...todaysImage} />
        <LastFiveDaysImage {...lastFiveDaysImages} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:'rgba(7,26,93,255)',
  }
})

export default Home