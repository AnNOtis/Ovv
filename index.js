function Ovv () {
  this._queue = []
}

Ovv.prototype.subscribe = function (fn) {
  if (({}).toString.call(fn) !== '[object Function]') {
    throw new TypeError('must subscribe with a function')
  }

  this._queue.push(fn)

  return () => this.unsubscribe(fn)
}

Ovv.prototype.publish = function () {
  this._queue.forEach((fn) => {
    fn.apply(null, arguments)
  })
}

Ovv.prototype.unsubscribe = function (fn) {
  const index = this._queue.indexOf(fn)

  this._queue = [...this._queue.slice(0, index), ...this._queue.slice(index + 1)]
}

module.exports = Ovv
