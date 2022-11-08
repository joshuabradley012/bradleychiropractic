import { useEffect, useRef } from 'react';
import NextImage from 'next/image';

export default function Image(props) {
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const { current } = imageWrapperRef;
    const imageSpan = current.querySelector('span');
    imageSpan.className = 'next-image';
  }, []);

  return (
    <span ref={imageWrapperRef}>
      <NextImage {...props} />
    </span>
  );
}
