function HelloWrapper({ children }) {
  return <div style={{ border: '10px solid red' }}>{children}</div>;
}

export default function Hello() {
  return (
    <>
      <h1>HELLO WORLD!!!</h1>
    </>
  );
}

Hello.Wrapper = HelloWrapper;
