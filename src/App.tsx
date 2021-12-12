import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.scss";
import { Header, NotFound, NewProject } from "./pages";
import { StartMenu } from "./pages/Start";

import { RoomDashboard } from "./domain/SingleProject/pages/RoomDashboard";
import { Provider } from "react-redux";
import store from "./store";

store.subscribe(() => console.log(store.getState()));
console.log(store.getState());

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {" "}
          <Route path="/signUp" element={<NotFound />} />
          <Route path="/logIn" element={<NotFound />} />
          <Route path="/singleproject" element={<NewProject />} />
          {/* <Route path={`/room/${id}`} element={RoomDashboard} /> */}
          <Route path="/start" element={<StartMenu />} />
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </Provider>
  );
}
