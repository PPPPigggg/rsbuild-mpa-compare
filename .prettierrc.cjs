/**
 * @type {import('prettier').Config}
 */
module.exports = {
  $schema: "https://json.schemastore.org/prettierrc",
  tabWidth: 2, // 缩进宽度
  printWidth: 80, // 一行代码最多几个字符
  singleQuote: false, // 是否使用单引号
  trailingComma: "all", // 最后一个属性时候带上逗号
  useTabs: false, // 时候使用制表符
  semi: false, // 在语句的末尾使用分号
  bracketSpacing: true, // 对象文字中括号之间使用空格分割
  jsxSingleQuote: true, // 在jsx中使用单引号
  plugins: ["@prettier/plugin-pug"], // 支持pug的格式化
}
