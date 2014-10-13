# Workshop App Shell

**WORK IN PROGRESS. Come back later? :)**

A boilerplate for creating your own frontend-focused
[NodeSchool](http://nodeschool.io/) lessons, not unlike
[shader-school](http://github.com/stackgl/shader-school).

Can be run as a vanilla node server, or bundled up as a node-webkit app. The
latter case is great for getting something installed without hitting the
terminal, among a bunch of other benefits. Currently only OSX is supported
this way, but I imagine it wouldn't be too hard to get the same working for
Windows/Linux – if you have some time to spare, pull requests would be very
much appreciated!

This forms the base of an upcoming WebGL workshop being created for
[CampJS](http://campjs.com/).

Parts of this may be refactored into independent packages in the future, but
right now I'm in a haste to get this together!

## Setup

Requires [npm](http://npmjs.org/) `2.x.x`.

``` bash
git clone git@github.com:hughsk/workshop-app-shell.git
cd workshop-app-shell
npm install
npm start
```

### Running the Server

``` bash
npm start
```

### Building the App

``` bash
make clean build
```
