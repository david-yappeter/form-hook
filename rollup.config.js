// import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
// import { terser } from "rollup-plugin-terser";
import sass from "rollup-plugin-sass";
import pkg from "./package.json";
import svgr from "@svgr/rollup";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "./dist/cjs/index.js",
        format: "cjs",
      },
      {
        file: "./dist/esm/index.js",
        format: "es",
      },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({
        include: "node_modules/**",
      }),
      typescript({tsconfig: "./tsconfig.json"}),
      json(),
      sass({
        insert: true,
      }),
      svgr(),
      // terser(),
    ],
  },
];

// import typescript from "rollup-plugin-typescript2";
// import pkg from "./package.json";

// export default {
//   input: "src/index.ts",
//   output: [
//     {
//       file: "./dist/cjs/index.js",
//       format: "cjs",
//     },
//     {
//       file: "./dist/esm/index.js",
//       format: "es",
//     },
//   ],
//   external: [...Object.keys(pkg.peerDependencies || {})],
//   plugins: [
//     typescript({
//       typescript: require("typescript"),
//     }),
//   ],
// };
