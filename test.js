import test from 'ava'
import O from '.'

test('subscribe()', t => {
  t.plan(1)

  const o = new O()
  o.subscribe(() => { t.pass() })
  o.publish('foo')
})

test('subscribe() - multiple observers', t => {
  t.plan(2)
  let count = 0

  const o = new O()
  o.subscribe(() => {
    count++
    t.is(count, 1)
  })
  o.subscribe(() => {
    count++
    t.is(count, 2)
  })
  o.publish('foo')
})

test('subscribe() - return unsubscribe function', t => {
  t.plan(1)

  const o = new O()
  const cancelFoo = o.subscribe(() => t.throw('Dont execute'))
  o.subscribe(msg => { t.is(msg, 'bar') })

  cancelFoo()
  o.publish('bar')
})

test('publish()', t => {
  t.plan(2)

  let count = 0
  const o = new O()
  o.subscribe(msg => {
    if (count === 0) t.is(msg, 'foo')
    if (count === 1) t.is(msg, 'bar')
    count++
  })
  o.publish('foo')
  o.publish('bar')
})

test('unsubscribe() - cancel with teh subscribed function', t => {
  t.plan(1)

  const o = new O()
  const subscribedOne = () => { t.throw('Dont execute') }
  const subscribedTwo = msg => { t.is(msg, 'bar') }
  o.subscribe(subscribedOne)
  o.subscribe(subscribedTwo)

  o.unsubscribe(subscribedOne)
  o.publish('bar')
})
