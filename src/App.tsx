import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.scss";
import { Header } from "./pages";

export default function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
