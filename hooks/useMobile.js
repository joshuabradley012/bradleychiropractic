import useBreakpoint from './useBreakpoint';

const defaultMobileSizes = [
  'xs',
  'sm',
];

const useMobile = (mobileSizes = defaultMobileSizes) => {
  const breakpoint = useBreakpoint();
  const isMobile = mobileSizes.includes(breakpoint);
  return isMobile;
};

export default useMobile;
