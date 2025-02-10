import type { Foo } from "./Foo";

export class Bar {
    public foo: Foo;

    constructor(foo: Foo) {
        this.foo = foo;
    }
}
