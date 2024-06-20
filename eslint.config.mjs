import babelParser from "@babel/eslint-parser";
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const eslintConfigs = [
  pluginJs.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.mjs", "src/**/*.js"],
    ignores: ["dist/**/*"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ...pluginReactConfig.languageOptions,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      ...pluginReactConfig.rules,
      "no-unexpected-multiline": "warn",
      "no-unused-vars": "warn",
      "no-console": 1,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": [
        "warn",
        {
          additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
export default eslintConfigs;
