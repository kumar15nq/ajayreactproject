import React, { useState } from "react";
import "./App.css";

export const Navbar = () => {
  const [userdata, setUserdata] = useState();
  function fetchdata() {
    fetch("https://reqres.in/api/users?page=1")
      .then((val) => val.json())
      .then((data) => {
        console.log(data.data);
        setUserdata(data.data);
      });
  }
  return (
    <div>
      <div className="navb">
        <h1 style={{ color: "blue" }}>Brand name</h1>
        <button className="button" onClick={() => fetchdata()}>
          Get user data
        </button>
      </div>
      <div>
        {userdata ? (
          <>
            <div className="d-flex justify-content-around flex-wrap pt-5 bg-info">
              {userdata.map((val) => {
                return (
                  <div className="card mt-2" style={{ width: "18rem" }}>
                    <img src={val.avatar} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">
                        {val.first_name} {val.last_name}
                      </h5>
                      <h5>{val.email}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
