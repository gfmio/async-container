import "reflect-metadata";

import { Container, inject, injectable } from "inversify";
import type { Bar } from "./Bar";
import type { Baz } from "./Baz";
import type { Foo } from "./Foo";
import { asyncClass } from "./asyncClass";

@injectable()
class AsyncFoo extends asyncClass(() => import("./Foo").then(({Foo}) => Foo)) {
    constructor() {
        super();
    }
}

@injectable()
class AsyncBar extends asyncClass(() => import("./Bar").then(({Bar}) => Bar)) {
    constructor(@inject("foo") foo: Foo) {
        super(foo);
    }
}

@injectable()
class AsyncBaz extends asyncClass(() => import("./Baz").then(({Baz}) => Baz)) {
    constructor(@inject("bar") bar: Bar, @inject("foo") foo: Foo) {
        super(bar, foo);
    }
}

const container = new Container();

container.bind<Foo>("foo").to(AsyncFoo);
container.bind<Bar>("bar").to(AsyncBar);
container.bind<Baz>("baz").to(AsyncBaz);

export { container };
