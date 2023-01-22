import Form from "../components/Form"
import { useState, useEffect } from "react";
import Registration from "./Registration";


export default function Home() {
   //
   const [data, setData] = useState(null);
   const [isLoading, setLoading] = useState(false);

   console.log(data);

   //
  useEffect(() => {
    setLoading(true);
    fetch("192.168.1.15", 3306)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  //
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No user data</p>;

  // render
  return (
    <div>
      <Form/>
    </div>
  );
}
  
