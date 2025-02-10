import type { Bar } from "./Bar";
import type { Foo } from "./Foo";

export class Baz {
    public bar: Bar;
    public foo: Foo;

    constructor(bar: Bar, foo: Foo) {
        this.bar = bar;
        this.foo = foo;
    }
}