import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearList } from "../redux/myList/myListActions";
import MyListItem from "./MyListItem";
import { Link } from "react-router-dom";

const MyList = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.myList.myList);

  return (
    <div className="mt-20 2xl:mx-24 xl:mx-24 lg:mx-24">
      <div className="flex items-center justify-between">
        <div className="capitalize text-xl font-bold mb-2 ml-9">My List</div>
        {myList.length !== 0 && (
          <button
            className="bg-white text-black text-lg py-1 px-2 rounded-md font-semibold"
            onClick={() => dispatch(clearList())}
          >
            Clear List
          </button>
        )}
      </div>

      <div className=" w-full grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
        {myList.map((item, index) => {
          return <MyListItem title={item} key={index} />;
        })}
      </div>
      {myList.length === 0 && (
        <div className="flex justify-center">
          <Link to="/">
            <button className="bg-white text-black text-lg py-1 px-2 rounded-md font-semibold mt-24">
              Add to your List
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyList;
