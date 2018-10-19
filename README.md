# ralltiir-application-cli

> The official command line interface (CLI) for Ralltiir Application.

## Documentation

## Usage

### Prerequisites

Node vx.x (or greater) and npm x.x.

### Installation

Currently, there's no `npm` package so to install, you have to clone the repository locally:

`git clone https://github.com/Ralltiir/ralltiir-application-cli.git && cd ralltiir-application-cli && npm install && npm link`

### Usage

> Init project template

``` bash
# 快速初始化一个项目模板
$ ra init
# 强制初始化, -f, --force
$ ra init -f
```

> Create project module

``` bash
# 新建一个带有默认配置的项目模块
$ ra add rt-app-demo-module
# 强制覆盖项目模块, -f, --force
$ ra add rt-app-demo-module -f
```

> Start debug server

``` bash
# 启动本地调试服务器用于项目预览
$ ra server
# 清除缓存, -c, --clean
$ ra server -c
# 指定启动端口号, -p, --port
$ ra server -p 8080
# 指定项目文件夹路径, -d, --dir
$ ra server -d './'
# 启动调试自动刷新, -l, --livereload
$ ra server -l
# 指定静态资源公共路径, -a, --asset
$ ra server -a '/static/'
# 自动打开浏览器窗口, -o, --open
$ ra server -o
# 指定配置文件路径, -s, --setting
$ ra server -s './'
```

> Project compile and package

``` bash
# 编译和输出代码到默认路径
$ ra build rt-app-demo
# 指定静态资源公共路径, -a, --asset
$ ra build -a '/static/'
# 指定项目文件夹路径, -d, --dir
$ ra build -d './'
# 指定编译代码输出路径, -o, --output
$ ra build -o './'
# 构建前先清空输出路径, -c, --clean
$ ra build -c
# 指定 NODE_ENV 环境变量, -e, --env
$ ra build -e 'production'
```

> Verification project module specification

``` bash
# 进行代码规范校验
$ ra validate rt-app-demo-module
# 忽略代码规范校验, -i, --ignore
$ ra validate -i rt-app-demo-module
```

> Create supported plugin

``` bash
# 新建一个功能支持插件
$ ra plugin rt-app-demo-plugin
```

> Project unit test

``` bash
# 进行单元测试
$ ra test rt-app-demo
```

> Upgrade CLI tool

``` bash
# 升级至最新版本
$ ra upgrade
# 指定升级版本, -v, --version
$ ra upgrade -v @0.0.1
```

## Contributing



## License

[MIT](https://github.com/Ralltiir/ralltiir-application-cli/blob/master/LICENSE)

## Todo

- [x] Init project template, high, 10月
- [ ] Create project module, high, 10月
- [ ] Start debug server, high, 10月
- [ ] Project compile and package, high, 11月
- [ ] Verification project module specification, middle, 11月
- [ ] Create supported plugin, middle, 11月
- [ ] Project unit test, middle, 11月
- [ ] Upgrade CLI tool, middle, 11月

