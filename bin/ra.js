#!/usr/bin/env node

const program = require('commander')
const semver = require('semver')
const chalk = require('chalk')
const version = require('../package').version

program
  .usage('<command> [options]')
  .version(version)
  .command('init', chalk.gray('初始化项目模板'))
  .command('add', chalk.gray('生成项目模块'))
  .command('server', chalk.gray('启动调试服务器'))
  .command('build', chalk.gray('项目编译打包'))
  .command('validate', chalk.gray('验证项目模块规范'))
  .command('plugin', chalk.gray('生成支持的插件'))
  .command('upgrade', chalk.gray('升级 CLI 工具'))
  .command('test', chalk.gray('项目送测'))
  .parse(process.argv)

