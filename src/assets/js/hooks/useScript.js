// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;

/* 
Example usage:

import useScript from 'hooks/useScript';

const MyComponent = props => {
  useScript('https://use.typekit.net/foobar.js');

  // rest of your component
}

*/