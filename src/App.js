import React from "react";
import "./App.css";
import Row from './Row';
import requests from './requests';

export default function App() {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}
