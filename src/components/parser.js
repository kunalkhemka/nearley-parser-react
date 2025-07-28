import React, { useState } from "react";
import grammar from "../grammar/expression.js";
import grammar_ast from "../grammar/expression-ast.js";
import parse from "../utils/parse.js";

const Parser = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [resultAST, setResultAST] = useState(null);
  const [error, setError] = useState(null);

  const parseInput = () => {
    const res = parse(grammar, input);
    const responseAST = parse(grammar_ast, input);
    if (res.success) {
      setResult(res.result);
      setError(null);
    } else {
      setError(res.error);
      setResult(null);
    }

    if (responseAST.success) {
      setResultAST(responseAST.result);
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
      {resultAST !== null && (
        <div className="ast-container">
          <pre>{JSON.stringify(resultAST, null, 2)}</pre>
        </div>
      )}
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
