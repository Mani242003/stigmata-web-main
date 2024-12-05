import { lazy } from 'react';

// Utility function to handle dynamic imports with retry logic
export function lazyLoadComponent(factory, retries = 2) {
  return lazy(() =>
    retry(factory, retries)
  );
}

// Retry logic for failed chunk loads
async function retry(fn, retriesLeft) {
  try {
    return await fn();
  } catch (error) {
    if (retriesLeft === 0) {
      throw error;
    }
    return retry(fn, retriesLeft - 1);
  }
}

// Utility function to preload components
export function preloadComponent(factory) {
  const component = lazy(factory);
  component.preload = factory;
  return component;
}
