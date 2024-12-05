import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const DefaultFallback = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const ComponentLoader = ({ 
  component: Component,
  fallback = <DefaultFallback />,
  ...props 
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

ComponentLoader.propTypes = {
  component: PropTypes.elementType.isRequired,
  fallback: PropTypes.element
};

export default ComponentLoader;
