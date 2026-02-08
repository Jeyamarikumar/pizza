
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import NetFlix from './assets/netflix-logo.png'

const tot = 6;

function Screen() {
  const { id } = useParams(); // ✅ get id from URL
  const [data, setData] = useState(null);

  

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/get/${id}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Error fetching:", err));
  }, [id]);

  const handleNext = () => {
    const nextId = parseInt(id) >= tot ? 1 : parseInt(id) + 1;
    navigate(`/screen/${nextId}`);
  };

  const handlePrev = () => {
    const prevId = parseInt(id) <= 1 ? tot : parseInt(id) - 1;
    navigate(`/screen/${prevId}`);
  };


  if (!data) {
    return <h2>Loading...</h2>;
  }




  return (
    <div>
    {data.image_url ? (<div className="screen">
      <img src={data.image_url} alt="" />
    </div>):(<div>No Image Found</div>)}
    <div className="cd">
    
      <img className="netfl" src={NetFlix} alt="" />
      <h4 className="text-white  mx-5">SERIES</h4>
      <h1 className="text-white">{data.title}</h1>
      <p className="text-white">Seasons {data.seasons}</p>
      <h3 className="text-white">Watch Season {data.seasons} Now</h3>
      <p className="text-white">{data.description}</p>
      <p className="text-white">Language : {data.language}</p>
      <p className="text-white">Genre : {data.genre}</p>
      <button className="b1" onClick={handlePrev} style={{ marginTop: "20px", padding: "10px" }}>
        Back
      </button>
      <button className="b2" onClick={handleNext} style={{ marginTop: "20px", padding: "10px" }}>
        Next
      </button>
      </div>
      
      
    </div>
  );
}

export default Screen;
