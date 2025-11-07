import "./Recommended.css";
import { useEffect, useState } from "react";
import { API_KEY, valueConverter } from "../../data";
import { Link } from "react-router-dom";

function Recommended({ category_id }) {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${category_id}&key=${API_KEY}`;

    const res = await fetch(relatedVideo_url);
    const data = await res.json();
    setApiData(data.items);
    console.log("Recommended Video Data: ", data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="video-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConverter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Recommended;
