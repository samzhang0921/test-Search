import React, { useState, useEffect } from 'react';
import { createComponent } from 'react-fela';

import SearchSection from "./Components/SearchSection";
import RestaurantsListSection from "./Components/RestaurantsListSection";
import getSearchResults from './utils/getSearchResults'


const MainContainer = createComponent(
  () => ({
    display: 'block',
    boxSizing: 'border-box',
    padding: '0 16px 16px',
    margin: '0 auto'
  }),
  'div'
);

const Main = (props) => {
const { searchApi } = props
const { baseUrl, restaurantsByPostcodeUrl } = searchApi
const apiUrl = `${baseUrl}${restaurantsByPostcodeUrl}`
const [searchPostcode, setSearchPostcode] = useState(null)
const [searResult, setSearchResult] = useState(null)

useEffect(async()=>{
  if (!searchPostcode) {
    setSearchResult(null)
  }
  if (searchPostcode) {
    const response = await getSearchResults(apiUrl, searchPostcode)
    setSearchResult(response)
  }
}, [searchPostcode])


return (
  <MainContainer>
<SearchSection setSearchPostcode={setSearchPostcode}/>
{searResult&&<RestaurantsListSection restaurantData={searResult}/>}
  </MainContainer>
)
}

export default Main
