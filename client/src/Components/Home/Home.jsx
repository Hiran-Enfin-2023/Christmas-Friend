import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Wish from "../Wish/Wish";
import ChristmasFrd from "../FindFriend/ChristmasFrd";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

function Home() {
  const [loading, setLoading] = useState(true);




  const loader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    loader();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header

          />
          <Slider  />
          <Wish  />
          <ChristmasFrd />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
