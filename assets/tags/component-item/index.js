define(function(require) {
  var riot = require('lib/riot')
  var multiline = require('lib/multiline')

  riot.tag('component-item', multiline(function() { /*!
    <h3>i am an item</h3>
  */}), function(opts) {

  })
})
