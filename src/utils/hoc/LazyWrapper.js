import React, { Suspense } from 'react';
import ImgLoader from '../../components/UI/ImgLoader/ImgLoader';

const LazyWrapper = ({ children }) => {
  return (
    <Suspense fallback={<ImgLoader />}>
      {children}
    </Suspense>
  )
}

export default LazyWrapper;
