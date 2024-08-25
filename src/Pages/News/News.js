import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Input, Slider } from "../../Components/index";
import Swal from "sweetalert2/src/sweetalert2.js";
import "./News.css";
function News() {
  let card=document.querySelector(".card");
  const [news, setNews] = useState([]);
  const [dataNews, setDataNews] = useState([]);
  const [dataArrayNews, setDataArrayNews] = useState([]);
  const [filterNews, setFilterNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=ee1fec9d209f4ad0b27ad5cecc672a38"
    )
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news.articles);
 useMemo(() => {
    setDataNews(news.articles);
    setDataArrayNews(dataNews)
  }, [news]); 
  useEffect(() =>{
    setFilterNews(dataArrayNews)
  }, [dataArrayNews])

 const handleSearch = (e) => {
    const fitter = dataArrayNews.filter((date) =>
      date.title.toLowerCase().includes(e.target.value)
    );
    setFilterNews(fitter);
  };
  return (
    <Slider>
       <Input type={"text"} width={"200px"} position={"sticky"} placeholder={"Search"} func={handleSearch}/>
      <div className="mainSlider">
         {filterNews?.map((a) => (
          <Card animation={"card2 1s 0.5s ease-in-out 1"} className="news_card" title={a.title}content={a.content}  src={a.urlToImage} actions={() =>{
            Swal.fire({
              title: `${a.description}`,
              text: `${a.author}`,
              background: "var(--background-color-main)"
            })
          }}></Card>
        ))} 
      </div>
    </Slider>
  );
}

export default News;
