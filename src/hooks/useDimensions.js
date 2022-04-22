import { useState } from 'react';
import useResize from './useResize';

const getDimensions = (element = window) => {
  const {
    innerWidth: width,
    innerHeight: height,
  } = element;

  return {
    width,
    height,
  };
};

const useDimensions = (element = window) => {
  if (typeof window === 'undefined') return null;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useResize(() => {
    const {
      width: elementWidth,
      height: elementHeight
    } = getDimensions(element);

    setWidth(elementWidth);
    setHeight(elementHeight);
  });

  return {
    width,
    height,
  };
};

export default useDimensions;
