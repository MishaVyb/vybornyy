import React from 'react'
import classes from './VideoFrame.module.css'

const ids = {
  showreel: 316403833,
  luskinder: 560488113,
  bicycle: 658520380,
  truck: 643143481,
  ozon: 620164565,
  oneandsix: 412248372,
  firstborn: 509656128,
  postdisco: 648003430,
  letyshops: 421594376,
  burgerking: 326313771,
  pashinin: 251364541,
  zhivotnoe: 425507174,
  parshuta: 627207042,
  princes: 657764193,
  crying: 425506892,
  ctrlband: 394367425,
  skillbox: 418426529,
}

const hs = {
  parshuta: 'a5aaf3e3be',
  letyshops: '4f4db09b4c',
  burgerking: 'e4764ae881',
  crying: '4fa55262ae',
}



const VideoFrame = ({name}) => {
  const id = ids[name]
  const h = hs[name] || '88b5817c41'
  const link = `https://player.vimeo.com/video/${id}?h=${h}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`

  console.log('video at:', link)

  if (!id) {
    return <h1>No video</h1>
  }



  return (
    <div>
      <div
        className={classes.videoFrame}
      >
        <iframe
          className={classes.iFrame}
          src={link}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          //allowFullScreen
          title="cinematography reel">
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )
}



export default VideoFrame