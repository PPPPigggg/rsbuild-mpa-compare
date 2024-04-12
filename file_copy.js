const fs = require("fs")
const path = require("path")

function copyFolder(source, target, startNumber) {
  // 检查源文件夹是否存在
  if (!fs.existsSync(source)) {
    console.log(`${source} 不存在`)
    return
  }

  // 循环复制文件夹，以数字命名
  for (let i = 1; i <= 200; i++) {
    const newFolderName = `index-${startNumber + i}`
    const newTargetPath = path.join(target, newFolderName)

    // 复制文件夹
    fs.mkdirSync(newTargetPath)

    // 读取源文件夹中的文件/子文件夹
    fs.readdirSync(source).forEach((file) => {
      const sourcePath = path.join(source, file)
      const targetPath = path.join(newTargetPath, file)

      // 复制文件
      if (fs.lstatSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, targetPath)
      }
      // 递归复制子文件夹
      else if (fs.lstatSync(sourcePath).isDirectory()) {
        copyFolder(sourcePath, targetPath, i * 1000)
      }
    })
  }
}

// 示例用法
const sourceFolder = "./src/pages/index"
const targetFolder = "./src/pages-copy"
const startNumber = 1 // 起始数字

copyFolder(sourceFolder, targetFolder, startNumber)
