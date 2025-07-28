import nearley from "nearley";

const parse = (grammar, input) => {
  try {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(input);
    return {
      success: true,
      result: parser.results[0],
    };
  } catch (e) {
    console.error("Parsing error:", e);

    return {
      success: false,
      error: e.message,
    };
  }
};

export default parse;
