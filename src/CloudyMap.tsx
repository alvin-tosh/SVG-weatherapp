import React from "react";
import { AbsoluteFill } from "remotion";

import { Clouds } from "./Clouds";
import { Kenya } from "./Kenya";
import { WeatherTitle } from "./WeatherTitle";

export const CloudyMap: React.FC = () => {
  return (
    <AbsoluteFill>
      <Kenya />
      <Clouds />
      <WeatherTitle type="clouds" />
    </AbsoluteFill>
  );
};