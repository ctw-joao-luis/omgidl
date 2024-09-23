module.exports = {
  root: true,
  extends: ["plugin:@lichtblick/base", "plugin:@lichtblick/jest"],
  env: { es2020: true, node: true },
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@lichtblick/typescript"],
      parserOptions: { project: "tsconfig.json", tsconfigRootDir: __dirname },
    },
  ],
};
