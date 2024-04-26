import { useEffect } from "react";
import "./style/tours.css";
import { useState } from "react";
import Tour from "./components/Tour";
export default function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://www.course-api.com/react-tours-project";
  async function fetchTours() {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  //   useEffect
  useEffect(() => {
    fetchTours();
  }, []);
  function removeTour(id) {
    console.log(id);
    const filteredTours = tours.filter(tour => tour.id !== id);
    setTours(filteredTours);
  }
  if (loading) {
    return (
      <main className="tours-main">
        <div className="loading"></div>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main className="empty-data tours-main">
        <h4>no tours left</h4>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </main>
    );
  }
  return (
    <main className="tours-main">
      <section className="tours-section">
        <div className="tours-title">
          <h2>our tours</h2>
          <div className="title-underline"></div>
        </div>
        <div className="tours">
          {tours.map(tour => {
            return <Tour tour={tour} key={tour.id} removeTour={removeTour} />;
          })}
        </div>
      </section>
    </main>
  );
}
