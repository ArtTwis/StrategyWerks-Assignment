import React, { useEffect, useState } from "react";
import { API_URL, api_data_limit } from "../constant/constant.js";
import MovieComponent from "./MovieComponent.jsx";
import { debounce } from "../utils/debouce.js";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);

  const getCardData = async () => {
    const res = await fetch(
      `${API_URL}?_limit=${api_data_limit}&_page=${page}`
    );
    const { data } = await res.json();
    setCard((prevData) => [...prevData, ...data]);
  };

  const handleInfiniteScroll = debounce(() => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  });

  useEffect(() => {
    getCardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MovieComponent movieInfo={card} />
    </div>
  );
};

export default Home;
