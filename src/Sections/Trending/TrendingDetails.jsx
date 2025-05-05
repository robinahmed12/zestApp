import React from "react";
import { useLoaderData, useParams } from "react-router";


const TrendingDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleApp = data.find((a) => a.id === id);

console.log(singleApp);


  

  return (
   <>

   </>
  );
};

export default TrendingDetails;
