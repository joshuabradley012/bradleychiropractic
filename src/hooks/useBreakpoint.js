import { useState } from 'react';
import useDimensions from './useDimensions';

// These values must match $grid-breakpoints from styles/bootstrap/_variables.scss
const defaultBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const useBreakpoint = (breakpoints = defaultBreakpoints) => {
  if (typeof window === 'undefined') return null;

  const { width } = useDimensions(window);

  let breakpoint = '';
  for (let size in breakpoints) {
    const breakpointWidth = breakpoints[size];
    if (breakpointWidth > width)
      break;
    breakpoint = size;
  }

  return breakpoint;
};

export default useBreakpoint;
