import React, { useState, useEffect } from "react";

//custom components
import Navbar from "../../Components/Navbar/Navbar";
import Cities from "../../Components/City/Cities";
import Filter from "../../Components/Filter/Filter-details";
import Card from "../../Components/Cards/Card";

function Details() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth: "YoroBrGyiHiMkr2F0pSI"
    }
  };
  // States
  const [city, setCity] = useState("chandigarh");
  const [gender, setGender] = useState("pg");
  const [properties, setProperties] = useState([]);

  const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  const getProperties = () => {
    const myproperties = [];
    fetch(
      `https://quickstay-interns.herokuapp.com/api/v1/${city}/${gender}`,
      options
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        data.data.map(code => {
          fetch(
            `https://quickstay-interns.herokuapp.com/api/v1/${city}/${gender}/${code}`,
            options
          )
            .then(res => res.json())
            .then(pgs => {
              myproperties.push(pgs.data);
            })
            .then(() => setProperties(myproperties))
            .catch(err => console.log(err));
        });
      })
      .catch(err => console.log(err));
  };

  const handelPgChange = value => {
    if (value == "boys") {
      setGender("pg");
      getProperties();
    } else if (value == "girls") {
      setGender("pg_girls");
      getProperties();
    }
  };

  useEffect(() => {
    if (properties.length <= 0) {
      getProperties();
    }
    console.log(properties);
  });

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Cities />
      </div>
      <div>
        <Filter handelPgChange={handelPgChange} />
      </div>
      <div className="row">
        {properties.map(pg => (
          <div className="col-sm-2">
            <Card
              id={pg.info[0].id}
              address={pg.info[0].address}
              price={pg.info[0].price}
              img={pg.info[0].pic1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
