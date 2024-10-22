import { defineConfig, loadEnv } from "@rsbuild/core"

import { pages } from "./config/pages.config"

import { pluginVue } from "@rsbuild/plugin-vue"
import { pluginVueJsx } from "@rsbuild/plugin-vue-jsx"
import { pluginPug } from "@rsbuild/plugin-pug"
import { pluginRem } from "@rsbuild/plugin-rem"
import { rspack } from "@rspack/core"

const { parsed } = loadEnv({
  prefixes: ["VUE_APP_"],
})
const isBuild = process.env.NODE_ENV === "production"

// 通过 html-webpack-plugin 生成的 HTML 集合
const HTMLPlugins: any[] = []
// 生成多页面的集合
for (const [pageName, page] of Object.entries(pages)) {
  const htmlPlugin = new rspack.HtmlRspackPlugin({
    template: "./public/index.html",
    filename: `${pageName}.html`,
    title: (page as any).title,
    chunks: [pageName, "vendors", "common", "runtime"],
    favicon: "./public/favicon.ico",
    minify: true,
  })
  HTMLPlugins.push(htmlPlugin)
}

export default defineConfig({
  /* 入口文件 */
  source: {
    entry: pages as any,
    /* 注入环境变量 */
    define: {
      "process.env": parsed,
    },
  },
  server: {
    port: 8090,
  },

  tools: {
    rspack: {
      plugins: [...HTMLPlugins],
    },
    htmlPlugin: false,
    // htmlPlugin: (config, { entryName }) => {
    //   config.template = "./public/index.html"
    //   config.filename = `${entryName}.html`
    //   config.title = pages[entryName].title
    //   config.chunks = [entryName, "vendors", "common", "runtime"]
    //   config.favicon = "./public/favicon.ico"
    //   config.minify = {
    //     removeAttributeQuotes: true,
    //     removeComments: true,
    //     removeEmptyAttributes: true,
    //     minifyCSS: false,
    //     minifyJS: false,
    //   }

    //   if (typeof config.minify === "object") {
    //     config.minify.minifyJS = false
    //     config.minify.minifyCSS = false
    //   }
    // },
  },
  plugins: [
    pluginVue(),
    pluginVueJsx(),
    pluginPug(),
    pluginRem({
      pxtorem: { rootValue: 39, unitPrecision: 5, propList: ["*"] },
      inlineRuntime: true,
    }),
  ],
  output: {
    legalComments: "none",
    dataUriLimit: 0,
    sourceMap: {
      js: isBuild ? false : "eval",
    },
    filenameHash: false,
  },
  performance: {
    /* 打包时候移除console */
    removeConsole: isBuild,
  },
})
