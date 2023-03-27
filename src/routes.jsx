import React from 'react'


import IndexPage from './routes/IndexPage'
import ShortfilmsPage from './routes/ShortfilmsPage'
import MusicVideosPage from './routes/MusicVideosPage'
import CommercialsPage from './routes/CommercialsPage'
import StillsPage from './routes/StillsPage'
import ContactsPage from './routes/ContactsPage'
import { Navigate } from 'react-router-dom'

export const routes =
    [
      {
        path: '/',
        element: <IndexPage />,
        title: 'misha vybornyy'
      },
      {
        path: '/shortfilms',
        element: <ShortfilmsPage />,
        title: 'short films'
      },
      {
        path: '/musicvideos',
        element: <MusicVideosPage />,
        title: 'music videos'
      },
      {
        path: '/commercials',
        element: <CommercialsPage />,
        title: 'commercials'
      },
      // {
      //   path: '/stills',
      //   element: <StillsPage />,
      //   title: 'stills'
      // },
      {
        path: '/contacts',
        element: <ContactsPage />,
        title: 'contacts'
      },

    ]
