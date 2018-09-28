#!/usr/bin/env node

const program = require('commander')
const semver = require('semver')
const chalk = require('chalk')
const version = require('../package').version

program
  .usage('<command> [options]')
  .version(version)
  .command('init', chalk.green('初始化 rt-app 项目'))
  .command('dev', chalk.green('启动调试服务器'))
  .command('build', chalk.green('项目打包'))
  .parse(process.argv)

