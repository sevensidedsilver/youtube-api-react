import axios from 'axios'
const APIKEY = "AIzaSyCq0qbY-KPgOa72uArqbo8K9oaVEpuihw0"




export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: APIKEY
  }
})
