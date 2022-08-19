import React from 'react'
import './style.css'

const ResultList = () => {
  
    const lastData =  JSON.parse(localStorage.getItem('localdata'))

  return (
    <div className='main-list'>
        <ul>
            <li>Puan: {lastData.point}</li>
            <li>Çözülen Sayısı:{lastData.solved} </li>
            <li>Yanlış Cevap:{lastData.incorrect} </li>
            <li>Doğru Cevap:{lastData.correct} </li>
        </ul>
    </div>
  )
}

export default ResultList
