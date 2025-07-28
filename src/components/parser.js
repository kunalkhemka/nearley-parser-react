import React, { useState } from "react";
import grammar from "../grammar/expression.js";
import parse from "../utils/parse.js";

const Parser = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const parseInput = () => {
    const res = parse(grammar, input);
    if (res.success) {
      setResult(res.result);
      setError(null);
    } else {
      setError(res.error);
      setResult(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to parse"
      />
      <button onClick={parseInput}>Parse</button>
      {result !== null && <p>Result: {JSON.stringify(result)}</p>}
      {error && (
        <p
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: error }}
        ></p>
      )}
    </div>
  );
};

export default Parser;
