# Ovv

> Simple pub/sub libary

## Install

```
yarn install Ovv
```

## Usage

```js
import Ovv from 'Ovv'

let o = new Ovv
o.subscribe(msg => { console.log('Observer 1:', msg) })
o.subscribe(msg => { console.log('Observer 2:', msg) })
o.publish('foo')
// => 'Observer 1:', 'foo'
// => 'Observer 2:', 'foo'


/** Unsubscribe - by return value **/
let o = new Ovv
const cancel = o.subscribe(msg => { console.log(msg) })
cancel()
o.publish('foo') // do nothing!!


/** Unsubscribe - by unsubscribe() **/
let o = new Ovv
const logger = msg => { console.log(msg) }
o.subscribe(logger)
o.unsubscribe(logger)
o.publish('foo') // do nothing!!
```

## API

### new Ovv( )

<small>return:</small>
- *`instance`* - Ovv

Initialize an Ovv instance.

### .subscribe(*`fn`*)

<small>argument:</small>
- *`fn`* - Function

<small>return:</small>
- *`unsubscribe`* - Function

Regist *`fn`* to the queue and return *`unsubscribe`* function.

### .publish(*`value`*)

<small>argument:</small>
- *`value`* - Any Type

Pass *`value`* to all *`fn`* s in the queue

### .unsubscribe(*fn*)

<small>argument:</small>
- *`fn`* - Function

Cancel the specific subscription.

```js
const logger = (msg) => { console.log(msg) }
o.subscribe(logger)

o.unsubscribe(logger)
o.publish('foo') // do nothing!!
```

## License

MIT
