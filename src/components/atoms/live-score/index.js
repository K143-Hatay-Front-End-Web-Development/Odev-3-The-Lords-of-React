
import {useScore } from '../../../context/use-score'
import './style.css'

const LiveScore = () => {

    const { question,data } = useScore()

    
  return (
    <ul className='live-ul'>
        <li className='live-li'>
            Puan: {data.point}
        </li>
        <li className='live-li'>
            Tur: {data.round}
        </li>
        <li className='live-li'>
            Soru: {question}
        </li>
    </ul>
  )
}

export default LiveScore
