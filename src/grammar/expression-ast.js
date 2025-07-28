// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
import lexer from '../lexer/lexer.js';
let ws, eq, neq, leq, geq, lt, gt, plus, minus, times, divide, number, lparen, rparen;
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "main", "symbols": ["_", "comparison", "_"], "postprocess": d => d[1]},
    {"name": "comparison", "symbols": ["expr", "_", "comp_op", "_", "expr"], "postprocess": 
        function(d) {
          return {
            type: "Comparison",
            operator: d[2],
            left: d[0],
            right: d[4]
          };
        }
          },
    {"name": "comparison", "symbols": ["expr"], "postprocess": d => d[0]},
    {"name": "comp_op", "symbols": [(lexer.has("eq") ? {type: "eq"} : eq)], "postprocess": () => "="},
    {"name": "comp_op", "symbols": [(lexer.has("neq") ? {type: "neq"} : neq)], "postprocess": () => "!="},
    {"name": "comp_op", "symbols": [(lexer.has("leq") ? {type: "leq"} : leq)], "postprocess": () => "<="},
    {"name": "comp_op", "symbols": [(lexer.has("geq") ? {type: "geq"} : geq)], "postprocess": () => ">="},
    {"name": "comp_op", "symbols": [(lexer.has("lt") ? {type: "lt"} : lt)], "postprocess": () => "<"},
    {"name": "comp_op", "symbols": [(lexer.has("gt") ? {type: "gt"} : gt)], "postprocess": () => ">"},
    {"name": "expr", "symbols": ["expr", "_", (lexer.has("plus") ? {type: "plus"} : plus), "_", "term"], "postprocess": d => ({ type: "BinaryOp", operator: "+", left: d[0], right: d[4] })},
    {"name": "expr", "symbols": ["expr", "_", (lexer.has("minus") ? {type: "minus"} : minus), "_", "term"], "postprocess": d => ({ type: "BinaryOp", operator: "-", left: d[0], right: d[4] })},
    {"name": "expr", "symbols": ["term"], "postprocess": d => d[0]},
    {"name": "term", "symbols": ["term", "_", (lexer.has("times") ? {type: "times"} : times), "_", "factor"], "postprocess": d => ({ type: "BinaryOp", operator: "*", left: d[0], right: d[4] })},
    {"name": "term", "symbols": ["term", "_", (lexer.has("divide") ? {type: "divide"} : divide), "_", "factor"], "postprocess": d => ({ type: "BinaryOp", operator: "/", left: d[0], right: d[4] })},
    {"name": "term", "symbols": ["factor"], "postprocess": d => d[0]},
    {"name": "factor", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": d => ({ type: "Number", value: parseFloat(d[0].value) })},
    {"name": "factor", "symbols": [(lexer.has("lparen") ? {type: "lparen"} : lparen), "_", "comparison", "_", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": d => d[1]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null }}
]
  , ParserStart: "main"
}
export default grammar;