
@{%
import lexer from "../lexer/lexer.js";
let ws, eq, neq, leq, geq, lt, gt, plus, minus, times, divide, number, lparen, rparen;

function toFloat(num) {
  return Number(parseFloat(num).toFixed(2))
}
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

expr -> expr _ %plus _ term     {% d => toFloat(d[0] + d[4]) %}
  | expr _ %minus _ term        {% d => toFloat(d[0] - d[4]) %}
  | term                     {% d => toFloat(d[0]) %}

term -> term _ %times _ factor  {% d => toFloat(d[0] * d[4]) %}
    | term _ %divide _ factor    {% d => toFloat(d[0] / d[4]) %}
    | factor                  {% d => toFloat(d[0]) %}

factor -> %number                {% d => toFloat(d[0]) %}
      | %lparen _ comparison _ %rparen {% d => toFloat(d[2]) %}

_ -> %ws:*     {% function(d) {return null } %}