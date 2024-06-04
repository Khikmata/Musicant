const CRAConfig = { extends: ["react-app", "react-app/jest"] };

module.exports = {
  root: true,
  extends: [
    ...CRAConfig.extends,
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  plugins: ["@tanstack/query", "no-only-tests"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@typescript-eslint/recommended", "prettier"],
      rules: {
        "no-only-tests/no-only-tests": "error",
        "@tanstack/query/exhaustive-deps": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              "{}": false,
            },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
};
