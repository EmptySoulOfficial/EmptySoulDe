import React from 'react'

const userWebLanguage = () => {
  var webLanguage = navigator.language.split('-')[0]

  return webLanguage
}

export default userWebLanguage