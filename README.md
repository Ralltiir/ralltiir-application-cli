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
# create a project template fastly
$ ra init
```

> Create project module

``` bash
# create a project module with default configure
$ ra add rt-app-demo-module
```

> Start debug server

``` bash
# start debug server locally for offline preview
$ ra server
```

> Project compile and package

``` bash
# build and output in `output` directory
$ ra build rt-app-demo
```

> Verification project module specification

``` bash
# suggestions for revision according to the specification
$ ra validate rt-app-demo-module
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
# upgrade tool to the latest version
$ ra upgrade
```

## Contributing



## License

[MIT](https://github.com/Ralltiir/ralltiir-application-cli/blob/master/LICENSE)

## Todo

- [x] Init project template, high
- [ ] Create project module, high
- [ ] Start debug server, high
- [ ] Project compile and package, high
- [ ] Verification project module specification, middle
- [ ] Create supported plugin, middle
- [ ] Project unit test, middle
- [ ] Upgrade CLI tool, middle

