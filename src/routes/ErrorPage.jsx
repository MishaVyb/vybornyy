import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h6>Sorry, an unexpected error has occurred.</h6>

      <p>{error.statusText}</p>
      <p>{error.message}</p>
      <p>{error.response?.data?.detail}</p>
      <p>{error.response?.data?.status}</p>

    </div>
  )
}