import React from "react";
import { ProjectValues } from "../interfaces";

export interface newProjectT {
  nameLabel: string;
  weatherLabel: string;
}

export const NewProjectCard = ({
  projectTitle,
  weatherStation,
}: ProjectValues) => {
  return (
    <>
      <>
        <h3>Nazwa Projektu</h3>
        <h2>{projectTitle}</h2>
      </>
      <>
        <h3>Stacja meterologiczna</h3>
        <h2>{weatherStation}</h2>
      </>
    </>
  );
};
