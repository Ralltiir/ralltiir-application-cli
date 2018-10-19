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
# initialize a project template quickly
$ ra init
# forced initialize, -f, --force
$ ra init -f
```

> Create project module

``` bash
# create a new project module with default configuration
$ ra add rt-app-demo-module
# forced coverage project module, -f, --force
$ ra add rt-app-demo-module -f
```

> Start debug server

``` bash
# start the local debug server for project preview
$ ra server
# clear cache, -c, --clean
$ ra server -c
# specify the startup port, -p, --port
$ ra server -p 8080
# specify the project folder path, -d, --dir
$ ra server -d './'
# start debugging auto refresh, -l, --livereload
$ ra server -l
# specify a static resource public path, -a, --asset
$ ra server -a '/static/'
# open a browser window automatically, -o, --open
$ ra server -o
# specify the configuration file path, -s, --setting
$ ra server -s './'
```

> Project compile and package

``` bash
# compile and output code to the default path
$ ra build rt-app-demo
# specify a static resource public path, -a, --asset
$ ra build -a '/static/'
# specify the project folder path, -d, --dir
$ ra build -d './'
# specify the compiled code output path, -o, --output
$ ra build -o './'
# empty the output path before building, -c, --clean
$ ra build -c
# specify NODE_ENV environmental variation, -e, --env
$ ra build -e 'production'
```

> Verification project module specification

``` bash
# code specification verification
$ ra validate rt-app-demo-module
# ignore code specification verification, -i, --ignore
$ ra validate -i rt-app-demo-module
```

> Create supported plugin

``` bash
# create a new feature support plugin
$ ra plugin rt-app-demo-plugin
```

> Project unit test

``` bash
# unit testing
$ ra test rt-app-demo
```

> Upgrade CLI tool

``` bash
# upgrade to the latest version
$ ra upgrade
# upgrade to the specified version, -v, --version
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

