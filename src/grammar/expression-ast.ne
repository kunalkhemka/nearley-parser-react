@{%
import lexer from '../lexer/lexer.js';
let ws, eq, neq, leq, geq, lt, gt, plus, minus, times, divide, number, lparen, rparen;
%}

@lexer lexer

main -> _ comparison _ {% d => d[1] %}

comparison -> expr _ comp_op _ expr
  {%
    function(d) {
      return {
        type: "Comparison",
        operator: d[2],
        left: d[0],
        right: d[4]
      };
    }
  %}
  | expr {% d => d[0] %}

comp_op -> %eq   {% () => "=" %}
         | %neq  {% () => "!=" %}
         | %leq  {% () => "<=" %}
         | %geq  {% () => ">=" %}
         | %lt   {% () => "<" %}
         | %gt   {% () => ">" %}

expr -> expr _ %plus _ term {% d => ({ type: "BinaryOp", operator: "+", left: d[0], right: d[4] }) %}
     | expr _ %minus _ term {% d => ({ type: "BinaryOp", operator: "-", left: d[0], right: d[4] }) %}
     | term {% d => d[0] %}

term -> term _ %times _ factor {% d => ({ type: "BinaryOp", operator: "*", left: d[0], right: d[4] }) %}
     | term _ %divide _ factor {% d => ({ type: "BinaryOp", operator: "/", left: d[0], right: d[4] }) %}
     | factor {% d => d[0] %}

factor -> %number {% d => ({ type: "Number", value: parseFloat(d[0].value) }) %}
       | %lparen _ comparison _ %rparen {% d => d[1] %}

_ -> %ws:*     {% function(d) {return null } %}