define(function(require) {
  return function multiline(f) {
    return f.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '')
  }
})
