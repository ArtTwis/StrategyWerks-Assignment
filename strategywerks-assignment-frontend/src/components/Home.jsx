import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, api_data_limit } from "../constant/constant.js";
import MovieComponent from "./MovieComponent.jsx";
import { debounce } from "../utils/debouce.js";
import { selectPage } from "../store/slices/appSelector.js";
import { appActions } from "../store/slices/appSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const pageRef = useRef(page);

  const getCardData = async () => {
    const res = await fetch(
      `${API_URL}?_limit=${api_data_limit}&_page=${page}`
    );
    const { data } = await res.json();
    dispatch(appActions.addMovies(data));
  };

  const handleInfiniteScroll = debounce(() => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        dispatch(appActions.updatePage(pageRef.current + 1));
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  });

  useEffect(() => {
    pageRef.current = page;
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
      <MovieComponent />
    </div>
  );
};

export default Home;
