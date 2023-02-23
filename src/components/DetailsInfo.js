import React from "react";

const DetailsInfo = ({ state }) => {
  let members = [];
  let genres = [];

  state.jawSummary.cast.map((mem, index) => {
    if (index < 10) members.push(mem.name);
    return members;
  });
  state.jawSummary.genres.map((genre) => {
    genres.push(genre.name);
    return genres;
  });

  return (
    <div className="info-container xl:w-96 lg:w-full">
      <div className="heading text-4xl mb-4 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-0">
        <p>
          About{" "}
          <span className="font-semibold">
            {state.jawSummary.title || state.jawSummary.episodeTitle}
          </span>
        </p>
      </div>
      <div className="text-lg mb-4">
        <p>{state.jawSummary.synopsis}</p>
      </div>

      <div className="year mb-2">
        <p>
          <span className="text-gray-500">
            Release Year
            {state.jawSummary.type === "show" && "(New Season)"}:
          </span>{" "}
          {state.jawSummary.releaseYear}
        </p>
      </div>
      {state.jawSummary.type === "show" && (
        <div className="creators mb-2">
          <p>
            <span className="text-gray-500">Creators: </span>
            {state.jawSummary.creators.length !== 0
              ? state.jawSummary.creators[0].name
              : "Not Available"}
          </p>
        </div>
      )}

      {state.jawSummary.type === "movie" && (
        <div className="directors mb-2">
          <p>
            <span className="text-gray-500">Director: </span>
            {state.jawSummary.creators.length !== 0
              ? state.jawSummary.directors[0].name
              : state.jawSummary.writers[0].name || "Not Available"}
          </p>
        </div>
      )}

      <div className="cast mb-2">
        <p>
          <span className="text-gray-500">Cast: </span>
          {members.join(", ")}
        </p>
      </div>
      <div className="genres mb-2">
        <p>
          <span className="text-gray-500">Genres: </span>
          {genres.join(", ")}
        </p>
      </div>
      <div className="maturity mb-2 ">
        <p>
          <span className="text-gray-500">Maturity Rating: </span>
          <span className="inline border-2 px-1 m-2 w-max">
            {state.jawSummary.maturity.rating.value}
          </span>
          <br />
          {state.jawSummary.maturity.rating.specificRatingReason}
        </p>
      </div>
    </div>
  );
};

export default DetailsInfo;
