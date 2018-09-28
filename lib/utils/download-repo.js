const path = require('path')
const exists = require('fs').existsSync
const ora = require('ora')
const home = require('user-home')
const rm = require('rimraf').sync
const chalk = require('chalk')
const download = require('download-git-repo')
const OFFICIAL_TEMPLATE = 'github:Ralltiir/ralltiir-application'
const DOWNLOAD_PATH = 'rt-app-download'

module.exports = () => {
  let template = OFFICIAL_TEMPLATE
  const spinner= ora('正在获取最新模板')
  spinner.start()

  // 本地临时目录
  const tmp = path.join(home, DOWNLOAD_PATH)
  // 先清空临时目录
  if (exists(tmp)) {
    rm(tmp)
  }

  // 下载默认模板到临时目录
  download(template, tmp, err => {
    spinner.stop()
    if (err) {
      console.log(chalk.red('获取最新模板失败'))
      return
    }
    console.log(chalk.green('获取最新模板成功'))
  })
}