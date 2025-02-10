# async-container

This project shows how to set up inversify to load modules for different dependencies asynchronously and o demand.

To install dependencies:

```bash
bun install
```

To run with bun:

```bash
bun run start:bun
```

To build for node:

```bash
bun run build
```

To run in node:

```bash
bun run start:node
```

The output will be something like the following.

```text
Promise { <pending> }
construct [class AsyncConstructorBase] [] [class AsyncFoo extends ProxyObject]
Foo {}
Promise { <pending> }
construct [class AsyncConstructorBase] [] [class AsyncFoo extends ProxyObject]
construct [class AsyncConstructorBase] [
  Foo {}
] [class AsyncBar extends ProxyObject]
Bar {
  foo: Foo {},
}
Foo {}
Promise { <pending> }
construct [class AsyncConstructorBase] [] [class AsyncFoo extends ProxyObject]
construct [class AsyncConstructorBase] [] [class AsyncFoo extends ProxyObject]
construct [class AsyncConstructorBase] [
  Foo {}
] [class AsyncBar extends ProxyObject]
construct [class AsyncConstructorBase] [
  Bar {
    foo: Foo {},
  }, Foo {}
] [class AsyncBaz extends ProxyObject]
Baz {
  bar: Bar {
    foo: Foo {},
  },
  foo: Foo {},
}
Bar {
  foo: Foo {},
}
Foo {}
```
