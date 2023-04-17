import { useContext } from "react";
import { Context } from "../App";
import CartCal from "./CartCal";

function About() {
  const { Cart, setCart } = useContext(Context);
  return (
    <>
      {Cart.map((Pr) => {
        return (
          <div className="card " key={Pr.id} style={{ height: "600px" }}>
            <img
              src={Pr.image}
              className="card-img-top "
              style={{ height: "300px" }}
              alt=""
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mh-20 ">{Pr.title}</h5>
              <p>Price : {Pr.price} $</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default About;
