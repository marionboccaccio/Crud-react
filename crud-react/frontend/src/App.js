import React from "react";
import { Switch, Route } from "react-router-dom";
// import the views
import Home from "./views/Home";
import AlbumsTable from "./views/AlbumsTable";
import AlbumCreate from "./views/AlbumCreate";
import ArtistsTable from "./views/ArtistsTable";
import ArtistCreate from "./views/ArtistCreate";
// import component (view partials)
import NavMain from "./components/NavMain";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/albums" component={AlbumsTable} />
        <Route path="/artists" component={ArtistsTable} />
        <Route path="/create-album" component={AlbumCreate} />
        <Route path="/create-artist" component={ArtistCreate} />
      </Switch>
    </div>
  );
}

export default App;
