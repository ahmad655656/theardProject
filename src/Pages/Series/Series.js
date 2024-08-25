
import React from 'react'
import TemplateApiSeries from '../../Components/TemplateApiSeries/TemplateApiSeries'

export default function Series() {
  return (
    <div>
      <TemplateApiSeries url={"https://api.themoviedb.org/3/tv/popular"} api_Key={"api_key=1acbaa240eaa4769b2918068ee3c01aa"} title={"Pupular Series"} /> 
      <TemplateApiSeries url={"https://api.themoviedb.org/3/tv/top_rated"} api_Key={"api_key=1acbaa240eaa4769b2918068ee3c01aa"}  title={"Top_Rated Series"} /> 
      <TemplateApiSeries url={"https://api.themoviedb.org/3/tv/on_the_air"} api_Key={"api_key=1acbaa240eaa4769b2918068ee3c01aa"}  title={"On_The_Air Series"} /> 
      <TemplateApiSeries url={"https://api.themoviedb.org/3/tv/airing_today"} api_Key={"api_key=1acbaa240eaa4769b2918068ee3c01aa"}  title={"Airing_Today Series"} /> 
    </div>
  )
}
