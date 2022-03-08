import * as React from 'react';
import { Image } from 'react-native';


export default ({height,width, source}) => {
  return(
  <Image height={height} width={width} source={source} style={{resizeMode:'contain', height : height, width : width}}/>
  );
};