import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div>User: {id}</div>
  )
}

export default User