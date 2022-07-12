import { useEffect, useState } from 'react'
import * as textdata from '../../data/lang.json'
import userWebLanguage from './browserLanguage.asset.jsx'

// NEEDS browserLanguage asset !!
const getweblanguage = userWebLanguage()

const useParseLanguages = () => {
  const [ lang_text, setLangText ] = useState('')

  useEffect(
    () => {
      const jsonObj = JSON.parse(JSON.stringify(textdata)).default
      // replace(/\\n/g, '<br>')
      const langString = getweblanguage
      // bsp: "de-DE" -> "de"
      setLangText(jsonObj[langString])
    },
    []
  )

  return lang_text
}

export default useParseLanguages
