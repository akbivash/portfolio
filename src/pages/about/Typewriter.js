import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Typewriter = ({words}) => {
    
const[word, setWord] = useState(false)
const[currentIndex, setCurrentIndex] = useState(0)
const[isDeleting, setIsDeleting] = useState(false)

useEffect(() => {
setWord(words[currentIndex].slice(0, words[currentIndex] ))

},[])

  return (
   <span>{word}</span>
  )
}

export default Typewriter