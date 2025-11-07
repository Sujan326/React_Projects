import { useParams } from 'react-router-dom'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import './Video.css'

function Video() {

  const {video_id, category_id} = useParams();

  return (
    <div className='play-container'>
      <PlayVideo video_id={video_id} />
      <Recommended category_id={category_id}/>
    </div>
  )
}

export default Video