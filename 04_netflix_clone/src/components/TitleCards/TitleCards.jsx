import { Link } from "react-router-dom";
import "./TitleCards.css";
import { useEffect, useRef, useState } from "react";

function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2E0NmI4Nzc4MmVhMzIzMTYyNGExNWRlNTVkOTI2ZSIsIm5iZiI6MTc2MjI2NTMzMC4wOTUsInN1YiI6IjY5MGEwOGYyYzgxYTc4N2M5NWM5NjdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEL-HCcKC-TJXYWWy6NGWs7BNmm1NA7Wn6-C9Him2b4",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  });

  // Horizontal scroll on vertical scroll using mouse
  // const handleWheel = (e) => {
  //   e.preventDefault();
  //   cardsRef.current.scrollLeft += e.deltaY;
  // };

  // Horizontal scroll on vertical scroll using mouse
  // useEffect(() => {
  //   cardsRef.current.addEventListner("wheel", handleWheel);
  // }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netlfix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCards;
