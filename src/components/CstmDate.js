import React from 'react'

const CstmDate = ({ date }) => {
  return (
    <>{new Date(date).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }
      )}</>
  )
}

export default CstmDate