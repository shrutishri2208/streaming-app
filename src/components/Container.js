import React, { useState, useEffect } from "react";
import List from "./List";
import { data } from "../data";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
  },
};

const Container = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
        options
      );
      const data = await response.json();
      setList(data.titles);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="mt-16">
      {isLoading ? (
        <div>
          <div className="list-heading font-bold mb-2 px-12 text-center text-4xl">
            Loading...
          </div>
        </div>
      ) : (
        <div>
          <List list={list} />
        </div>
      )}
    </section>
  );
};

export default Container;
