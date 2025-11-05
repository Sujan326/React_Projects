import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { useEffect, useState } from "react";
import { valueConverter } from "../../data";
import moment from "moment";

function Feed({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

      // To understand why fetch is written in that way below run the below console statements:
      /*
      const res = await fetch(videoList_url);
      console.log("Res: ", res)
      const data = await res.json();
      console.log("Data", data)
      */

      try {
        const res = await fetch(videoList_url);
        if (!res.ok) throw new Error(`${res.status}`);

        const data = await res.json();
        setData(data.items);
        // console.log("Data: ", data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>
              {item.snippet.title}
            </h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Feed;
