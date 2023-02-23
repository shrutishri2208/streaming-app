import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearList } from "../redux/myList/myListActions";
import MyListItem from "./MyListItem";
import { Link } from "react-router-dom";

const MyList = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.myList);

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between mx-12">
        <div className="list-heading font-bold  ">My List</div>
        {myList.length !== 0 && (
          <button
            className="bg-white text-black text-lg py-1 px-2 rounded-md font-semibold"
            onClick={() => dispatch(clearList())}
          >
            Clear List
          </button>
        )}
      </div>

      <div className=" flex flex-wrap mx-12 w-screen mt-3">
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
