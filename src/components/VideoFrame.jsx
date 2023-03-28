import React from 'react'
import classes from './VideoFrame.module.css'

const ids = {
  showreel: 'sOD9RYKEVrc', // updated
  luskinder: 558735718, // updated
  bicycle: 658520380, // ok
  truck: 643143481, // ok
  ozon: '35JJHMJgL2I', // updated
  oneandsix: 'IIs601KobR4',
  firstborn: 509656128, // unawaliable
  postdisco: 648003430, // ok
  letyshops: 421594376, // unawaliable
  burgerking: 326313771, // unawaliable
  pashinin: 251364541, // unawaliable
  zhivotnoe: 'oCgII1NrdO4',
  parshuta: 627207042, // ok
  princes: 657764193, // ok
  crying: 425506892, // unawaliable
  ctrlband: 394367425, // unawaliable
  skillbox: 'm3zj8xv4Cf4', // updated
}


// for private videos
const hs = {
  // parshuta: 'a5aaf3e3be',
}

const VideoFrame = ({name}) => {
  const id = ids[name]
  const isYouTubeVideo = (typeof id == 'string')

  if (!id) {
    return <></>
  }

  var link
  if (isYouTubeVideo) {
    link = `https://www.youtube.com/embed/${id}?controls=1&autoplay=1&mute=1`
  } else {
    const h = hs[name] || '88b5817c41'
    link = `https://player.vimeo.com/video/${id}?h=${h}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`
  }

  console.log('video at:', link)


  if (isYouTubeVideo)
  {
    return (
      <div>
        <div className={classes.videoContainer}>
          <iframe
            width="860"
            height="415"
            src={link}
            // title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    )
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
          allowFullScreen
          // title="cinematography reel"
        >
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )

}



export default VideoFrame