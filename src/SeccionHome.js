import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Bienvenido a la pagina principal</h2>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </section>
  );
};

export default Home;
