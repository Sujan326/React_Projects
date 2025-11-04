import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res.results[0]);
        console.log(res.results[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-2)} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        title="trailer"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{new Date(apiData.published_at).toLocaleDateString()}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
