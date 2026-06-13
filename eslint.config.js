import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        console: "readonly", // لكي لا يظهر لك خطأ تحت console.log
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // هذا السطر السحري الذي سيحذف الـ 31 خطأ المزعجين!
      "no-undef": "error", // هذا السطر الذي سيجبر الخط الأحمر على البقاء تحت enteredValues
    },
  },
];
