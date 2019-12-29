import React from "react";
import "./Cards.css";

function Card(props) {
  console.log("PROPS", props);
  return (
    <div style={{ marginTop: 10, padding: 10 }}>
      <div className="">
        <div className="">
          <div className="card">
            <div className="card-img">
              <img style={{ width: 190 }} src={props.img} />
            </div>
            <div className="card-text">
              <div>
                <div>
                  <div className="card-add">
                    <p>{props.id}</p>
                    <p>{props.address}</p>
                  </div>
                  <div className="card-price">
                    <p>
                      Starting at: <span>Rs.{props.price}/-</span>
                    </p>
                  </div>
                </div>
                {/* <div className='col-sm-6'>
									<div className='text-icon'>
										<i class='ni ni-bold-left'></i>
									</div>
								</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
