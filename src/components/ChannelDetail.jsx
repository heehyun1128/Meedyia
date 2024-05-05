import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  //use useParams() to get the id (UCmXmlB4-HJytD7wek0Uo97A) of the channel from inside of the code: http://localhost:3000/channel/UCmXmlB4-HJytD7wek0Uo97A
  const {id} = useParams()
  //use useEffect() hook to render the page whenever [id] is changed
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  
  )
}

export default ChannelDetail