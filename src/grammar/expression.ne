
@{%
import lexer from "../lexer/lexer.js";
let ws, eq, neq, leq, geq, lt, gt, plus, minus, times, divide, number, lparen, rparen;
%}

@lexer lexer

main -> _ comparison _ {% d => d[1] %}

comparison -> expr _ comp_op _ expr {%
  function(d) {
    //console.log("Comparison:", d);
    switch (d[2]) {
      case "=": return d[0] === d[4];
      case "!=": return d[0] !== d[4];
      case "<":  return d[0] < d[4];
      case "<=": return d[0] <= d[4];
      case ">":  return d[0] > d[4];
      case ">=": return d[0] >= d[4];
      default: return;
    }
  }
%}
| expr {% d => d[0] %}

comp_op -> %eq {% d => "=" %}
  | %neq {% d => "!=" %}
  | %leq {% d => "<=" %}
  | %geq {% d => ">=" %}
  | %lt {% d => "<" %}
  | %gt {% d => ">" %}

expr -> expr _ %plus _ term     {% d => d[0] + d[4] %}
  | expr _ %minus _ term        {% d => d[0] - d[4] %}
  | term                     {% d => d[0] %}

term -> term _ %times _ factor  {% d => d[0] * d[4] %}
   | term _ %divide _ factor    {% d => d[0] / d[4] %}
   | factor                  {% d => d[0] %}

factor -> %number                {% d => parseFloat(d[0]) %}
       | %lparen _ comparison _ %rparen {% d => d[2] %}

_ -> %ws:*     {% function(d) {return null } %}