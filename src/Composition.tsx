import { useVideoConfig, useCurrentFrame } from 'remotion';
import { Cloud } from './Cloud';
import { Kenya } from './Kenya';
import { Rain } from './Rain';

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();
	
	const frame = useCurrentFrame();
	const opacity = frame / durationInFrames;
	
	return (
		<div
		  style={{
			  flex: 1,
			  textAlign: 'center',
			  fontSize: '7em',
			  background: 'black',
			  color: 'red',
			  opacity,

			}}
		  >
			  Hi Mom!🖐️
			  <Kenya />
			  <Rain />
			  <Cloud x={0} y={0} delay={0} />
		  </div>
	);
};
