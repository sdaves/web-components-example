requirejs && require.config({
  urlArgs: "bust=" + (new Date()).getTime()
})

define(function(require) {
  var labor = require('./tags/my-component/index')
  var riot = require('./lib/riot')
  var ready = require('./lib/ready')

  ready(function() {
    riot.mount('*')
  })
})
