const list = {}

for (let index = 1; index <= 200; index++) {
  list["index-" + index] = "首页-" + index
}

const pages = {}
for (const [key, value] of Object.entries(list)) {
  pages[key] = {}
  pages[key].title = value
  pages[key].import = `src/pages/${key}/index.ts`
}
export { pages }
