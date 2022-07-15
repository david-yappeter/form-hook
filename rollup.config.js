import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import typescript from "rollup-plugin-typescript2";
// // import commonjs from "@rollup/plugin-commonjs";
// import json from "@rollup/plugin-json";
// import { terser } from "rollup-plugin-terser";
// import sass from "rollup-plugin-sass";
// import pkg from "./package.json";
// import svgr from "@svgr/rollup";

// export default {
//   input: "src/index.ts",
//   output: [
//     {
//       file: "./lib/cjs/index.js",
//       format: "cjs",
//     },
//     {
//       file: "./lib/esm/index.js",
//       format: "es",
//     },
//   ],
//   external: [...Object.keys(pkg.peerDependencies || {})],
//   plugins: [
//     peerDepsExternal(),
//     resolve(),
//     // commonjs({
//     //   include: "node_modules/**",
//     //   namedExports: {
//     //     "node_modules/react-is/index.js": ["isFragment", "ForwardRef", "Memo"],
//     //   },
//     // }),
//     // typescript({ useTsconfigDeclarationDir: true }),
//     typescript({
//       typescript: require("typescript"),
//     }),
//     json(),
//     sass({
//       insert: true,
//     }),
//     svgr(),
//     terser(),
//   ],
// };

// import typescript from "rollup-plugin-typescript2";
// import pkg from "./package.json";

// export default {
//   input: "src/index.ts",
//   output: [
//     {
//       file: "./lib/cjs/index.js",
//       format: "cjs",
//     },
//     {
//       file: "./lib/esm/index.js",
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
