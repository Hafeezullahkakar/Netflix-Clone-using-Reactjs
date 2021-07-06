/** @format */

import "./App.css";
import Banner from './Components/Banner'
import Row from "./Components/Row";
import requests from "./Components/Api";
import Nav from './Components/Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow = {true}
        />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
