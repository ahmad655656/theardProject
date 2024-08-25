import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, Input, Slider, Title } from "..";
import { FiArrowLeft } from "react-icons/fi";
import ContainerCard from "../ContainerCard/ContainerCard";
import NavBar from "../NavBar/NavBar";
import SliderCard from "../SliderCard/SliderCard";
import Swal from "sweetalert2/src/sweetalert2";
function TemplateApiFilms(props) {
  const [api, setApi] = useState([]);
  const [apiArray, setApiArray] = useState([]);
  const [filteredApiArray, setFilteredApiArray] = useState([]);
  const [apiArrayF, setApiArrayF] = useState([]);
  const [detailsFilm, setDetailsFilm] = useState([]);
  const [productionCompani, setProductionCompani] = useState([]);
  const [filmId, setFilmId] = useState();

  const left = useRef();

  useEffect(() => {
    fetch(`${props.url}?${props.api_Key}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  console.log(api);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filmId}?api_key=1acbaa240eaa4769b2918068ee3c01aa`
    )
      .then((res) => res.json())
      .then((data) => setDetailsFilm(data));
  }, [filmId]);
  console.log(detailsFilm);
  const move = () => {
    left.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  useMemo(() => {
    setApiArray(api.results);
    console.log(apiArray);
    setApiArrayF(apiArray);
  }, [api]);
  useEffect(() => {
    setFilteredApiArray(apiArrayF);
  }, [apiArrayF]);
  const handleChange = (e) => {
    const f = apiArrayF.filter((ap) =>
      ap.title.toLowerCase().includes(e.target.value)
    );
    setFilteredApiArray(f);
  };

  return (
      <ContainerCard>
        <Input
          top={"-97px"}
          position={"absolute"}
          type={"text"}
          width={"200px"}
          placeholder={"Search"}
          func={handleChange}
        ></Input>
        <NavBar>
          <div
            style={{
              position: "absolute",
              width: "350px",
              height: "70px",
              top: "0",
              right: "72px",
            }}
          ></div>
          <span
            className="parent_title"
            style={{
              width: "800px",
              color: "var(--color-button)",
              height: "100px",
              textAlign: "center",
              borderRadius: "20px",
              position: "absolute",
              top: "0",
              left: "-1%",
            }}
          >
            <span className="span_title">
              <Title fontSize={"60px"}>{props.title}</Title>
            </span>
          </span>
        </NavBar>
        <SliderCard>
          {filteredApiArray?.map((filma) => (
            <Card
              details={() => {
                setFilmId(filma.id);
                setProductionCompani(detailsFilm.production_companies);
                Swal.fire({
                  title: `${detailsFilm.original_title}`,
                  imageUrl: `https://image.tmdb.org/t/p/w500/${detailsFilm.poster_path}`,
                  imageWidth: "400",
                  imageHeight: "300",
                  html: `<div><h1>${
                    detailsFilm.overview
                  }</h1>
                  <hr />
                  <hr />
                  <hr />
                  <h3>
                  ${productionCompani?.map((comp) => {
                    return `${comp.name}<br />`
                  }
                )}
                  </h3>
                  </div>
                 
                `,

                  color: "black",
                  width: 1400,
                  height: 900,
                  padding: "3em",
                  background: "#666",
                });
              }}
              animation={"card1 2s 1s ease-in-out 1"}
              title1={filma.name}
              title2={filma.title}
              src={`https://image.tmdb.org/t/p/w500/${filma.poster_path}`}
              popularity={filma.popularity}
            ></Card>
          ))}
        </SliderCard>
        <FiArrowLeft
          style={{
            color: "var(--color-button)",
            position: "absolute",
            bottom: "0",
            right: "-1005%",
            marginLeft: "20px",
            fontSize: "60px",
            fontWeight: "400",
          }}
          onClick={move}
        ></FiArrowLeft>
      </ContainerCard>
  );
}

export default TemplateApiFilms;
