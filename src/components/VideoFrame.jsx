import React from 'react'
import classes from './VideoFrame.module.css'

const ids = {
  showreel: 316403833,
  luskinder: 560488113,
  bicycle: 658520380,
  truck: 643143481,
  ozon: 620164565,
}

const VideoFrame = ({name}) => {
  const id = ids[name]

  return (
    <div>
      <div
        className={classes.videoFrame}
      >
        <iframe
          className={classes.iFrame}
          src={`https://player.vimeo.com/video/${id}?h=88b5817c41&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
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