function HomeWrapper({ children }) {
  return <div style={{ border: '1px solid red' }}>{children}</div>;
}

export default function Home() {
  return (
    <div>
      <h1>Index Route</h1>
    </div>
  );
}

Home.Wrapper = HomeWrapper;
