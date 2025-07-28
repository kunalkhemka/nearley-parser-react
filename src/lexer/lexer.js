import moo from "moo";

const lexer = moo.compile({
  ws: /[ \t]+/,
  number: /[0-9]+(?:\.[0-9]+)?/,
  lparen: /\(/,
  rparen: /\)/,
  plus: /\+/,
  minus: /-/,
  times: /\*/,
  divide: /\//,
  eq: /=/,
  neq: /!=/,
  leq: /<=/,
  geq: />=/,
  lt: /</,
  gt: />/,
});

export default lexer;
