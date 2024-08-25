
import React from 'react'
import TemplateApiFilms from '../../Components/TemplateApiFilms/TemplateApiFilms'
import { Slider } from '../../Components'

export default function Films() {
  return (
    <Slider>
      <TemplateApiFilms url={"https://api.themoviedb.org/3/movie/popular"} api_Key={"api_key=1acbaa240eaa4769b2918068ee3c01aa"} title={"Pupular Films"} />
      <TemplateApiFilms url={"https://api.themoviedb.org/3/movie/upcoming"} api_Key={"api_key=1acbaa240eaa4769b2918068ee3c01aa"} title={"UpComing Films"} />
      <TemplateApiFilms url={"https://api.themoviedb.org/3/movie/now_playing"} api_Key={"api_key=1acbaa240eaa4769b2918068ee3c01aa"} title={"Now_Playing Films"} />
      <TemplateApiFilms url={"https://api.themoviedb.org/3/movie/top_rated"} api_Key={"api_key=1acbaa240eaa4769b2918068ee3c01aa"} title={"Top_Rated Films"} />
    </Slider>
  )
}

