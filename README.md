# Ovv

> simple pub/sub libary

## Install

```
yarn install Ovv
```

## Usage

```js
var Ovv = require('Ovv')

/** Subscribe once **//
var o = new Ovv
o.subscribe(function (msg) { console.log(msg) })
o.publish('foo')
// => 'foo'

/** Subscribe multiple times **/
var o = new Ovv
o.subscribe(function (msg) { console.log('Observer 1:', msg) })
o.subscribe(function (msg) { console.log('Observer 2:', msg) })
o.publish('foo')
// => 'Observer 1:', 'foo'
// => 'Observer 2:', 'foo'

/** Unsubscribe - by return value **/
var o = new Ovv
var cancel = o.subscribe(function (msg) { console.log(mdg) })
cancel()
o.publish('foo') // do nothing!!

/** Unsubscribe - by unsubscribe() **/
var o = new Ovv
var logger = function (msg) { console.log(mdg) }
o.subscribe(logger)
o.unsubscribe(logger)
o.publish('foo') // do nothing!!
```

### API

**new Ovv()** - return instance

**.subscribe(*`fn`*)** - return *`unsubscribe`*

- *`fn`* - Function

- *`unsubscribe`* - Function

Regist *`fn`* to the queue and return *`unsubscribe`* function

**.publish(*`value`*)** - return undefined

- *`value`* - Any Type

Pass *`value`* to all *`fn`* s in the queue

**.unsubscribe(*fn*)**

- *`fn`* - Function

Cancel specific subscription

## License

MIT
