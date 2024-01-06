import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchapi } from "./redux/slices/counter";

const Childco = () => {
  const count = useSelector((state) => state);
  let gapi = count.counter;
  const dispatch = useDispatch();
  return (
    <>
      <h3>Counts</h3>

      <button
        onClick={() => {
          dispatch(fetchapi());
        }}
      >
        Apicall
      </button>
      {gapi.isLoading == false && gapi.isPending == false ? (
        <div>
          {gapi.data.map((val) => {
            return (
              <>
                <h1>{val.title}</h1>
              </>
            );
          })}
        </div>
      ) : gapi.isLoading == true && gapi.isPending == false ? null : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default Childco;
