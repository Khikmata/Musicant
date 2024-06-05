const { NODE_ENV, REACT_APP_MODE} = process.env;

const getVariableValue = (MODE, name) =>
  process.env[`${name}_${MODE}`] || process.env[name];

const IS_PRODUCTION = NODE_ENV === "production";
const MODE = REACT_APP_MODE || (IS_PRODUCTION ? "PROD" : undefined);

const CLIENT_ID = getVariableValue(MODE, "REACT_APP_CLIENT_ID");
const CLIENT_SECRET = getVariableValue(MODE, "REACT_APP_CLIENT_SECRET");
const TARGET_AUTH_URL = getVariableValue(MODE, "REACT_APP_TARGET_AUTH_URL");
const TARGET_APP_URL = getVariableValue(MODE, "REACT_APP_TARGET_APP_URL");

module.exports.Config = {
  NODE_ENV,
  IS_PRODUCTION,
  MODE,
  CLIENT_ID,
  CLIENT_SECRET,
  TARGET_APP_URL,
  TARGET_AUTH_URL
};
