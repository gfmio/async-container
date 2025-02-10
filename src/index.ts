import "reflect-metadata";

import type { Bar } from "./Bar";
import type { Baz } from "./Baz";
import type { Foo } from "./Foo";
import { asyncContainer } from "./asyncContainer";

const container = asyncContainer(() => import("./container").then(({ container }) => container));

const fooPromise = container.getAsync<Foo>("foo");
console.log(fooPromise);
const foo = await fooPromise;
console.log(foo);

const barPromise = container.getAsync<Bar>("bar");
console.log(barPromise);
const bar = await barPromise;
console.log(bar);
console.log(bar.foo);

const bazPromise = container.getAsync<Baz>("baz");
console.log(bazPromise);
const baz = await bazPromise;
console.log(baz);
console.log(baz.bar);
console.log(baz.bar.foo);
