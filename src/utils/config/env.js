const { NODE_ENV, REACT_APP_MODE } = process.env;

const getVariableValue = (MODE, name) =>
  process.env[`${name}_${MODE}`] || process.env[name];

const IS_PRODUCTION = NODE_ENV === "production";
const MODE = REACT_APP_MODE || (IS_PRODUCTION ? "PROD" : undefined);
const CLIENT_ID = getVariableValue(MODE, "CLIENT_ID");
const CLIENT_SECRET = getVariableValue(MODE, "CLIENT_SECRET");

module.exports.Config = {
  NODE_ENV,
  IS_PRODUCTION,
  MODE,
  CLIENT_ID,
  CLIENT_SECRET,
};
