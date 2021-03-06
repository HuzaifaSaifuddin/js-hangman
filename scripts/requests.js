const getPuzzle = async (wordCount = 0) => {
  const response  = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch the puzzle')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}

const getCountry = async (countryCode) => {
  const response  = await fetch('https://restcountries.eu/rest/v2/all')
  
  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch Data')
  }
}

const getLocation = async () => {
  const response  = await fetch('https://ipinfo.io/json?token=5b0ab28bb3b5a2')
  
  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Unable to fetch Data')
  }
}
