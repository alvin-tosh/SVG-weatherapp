import { Composition } from "remotion";

import { Remotion } from "./index";

import { CANVAS } from "./Canvas";

import { CloudyMap } from "./CloudyMap";
import { getFont } from "./load-font";
import { WeatherMap } from "./WeatherMap";

const { width, height } = CANVAS;
const fps = 30;
// the audio duration is 58seconds + 4 frames
const durationInFrames = fps * 58 + 4;

getFont();

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Remotion}
        durationInFrames={durationInFrames}
        fps={fps}
        width={width}
        height={height}
      />
      <Composition
        id="CloudyMap"
        component={CloudyMap}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      />
      
      
    </>
  );
};