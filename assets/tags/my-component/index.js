define(function(require) {
  var riot = require('../../lib/riot')
  var multiline = require('../../lib/multiline')

  //load tags this tag uses
  require('../component-item/index')
  require('../component-footer/index')

  riot.tag('my-component', multiline(function() { /*!
    <h2>hello from our component!!!</h2>
    Welcome
    <component-item></component-item>
    <component-item></component-item>
    <component-footer></component-footer>
  */}), function(opts) {

  })
})
