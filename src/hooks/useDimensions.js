import { useState } from 'react';
import useResize from './useResize';

const getDimensions = (element) => {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  if (typeof element === 'undefined') element = window;

  const {
    innerWidth: width,
    innerHeight: height,
  } = element;

  return {
    width,
    height,
  };
};

const useDimensions = (element) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useResize(() => {
    if (typeof window === 'undefined') return;
    if (typeof element === 'undefined') element = window;

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
