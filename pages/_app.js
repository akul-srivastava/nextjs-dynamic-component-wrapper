import React from 'react';

function MyApp({ Component, pageProps }) {
  const Wrapper =
    Component.Wrapper ||
    function ({ children }) {
      return <>{children}</>;
    };

  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
