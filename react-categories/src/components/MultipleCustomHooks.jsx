import React from "react";
import { useFetch } from "../hooks/useFetch";

function MultipleCustomHooks() {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <blockquote>
          <p>{data[0]?.quote}</p>
          <footer>{data[0]?.author}</footer>
        </blockquote>
      )}

      <button onClick={() => increment()}>Next Quote</button>
    </>
  );
}

export default MultipleCustomHooks;
