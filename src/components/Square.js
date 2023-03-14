import React from 'react'

export const Square = ({ children, className, updateBoard, index }) => {
  return (
    <div onClick={updateBoard} className={className}>
      {children}
    </div>
  )
}
