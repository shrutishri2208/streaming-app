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
  const [list, setList] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(
  //       "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
  //       options
  //     );
  //     const data = await response.json();
  //     setList(data.titles);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const trendingList = list.slice(0, 15);
  const casualList = list.slice(15, 30);
  const whileList = list.slice(30, 45);
  const newList = list.slice(0, 15);
  const popular = list.slice(15, 30);
  const onlyOn = list.slice(30, 45);

  const headings = {
    trending: "Trending Now",
    casual: "Casual Viewing",
    while: "Watch for a While",
    new: "New Releases",
    popular: "Popular on Watcher",
    onlyOn: "Only on Watcher",
  };

  return (
    <section className="mt-16 ml-8">
      {isLoading ? (
        <div>
          <div className="list-heading font-bold mb-2 px-12 text-center text-4xl">
            Loading...
          </div>
        </div>
      ) : (
        <div>
          <List list={trendingList} heading={headings.trending} />
          <List list={casualList} heading={headings.casual} />
          <List list={whileList} heading={headings.while} />
          <List list={newList} heading={headings.new} />
          <List list={popular} heading={headings.popular} />
          <List list={onlyOn} heading={headings.onlyOn} />
        </div>
      )}
    </section>
  );
};

export default Container;
