abstract class AsyncConstructorBase {}

Object.freeze(AsyncConstructorBase);
Object.freeze(AsyncConstructorBase.prototype);

export const asyncClass = <C extends new (...args: never[]) => unknown>(clsImport: () => Promise<C>) => {
    let clsPromise: Promise<C> | undefined;

    const cls = new Proxy<C>(AsyncConstructorBase as unknown as C, {
        construct(target, args, newTarget) {
            console.log("construct", target, args, newTarget);
            clsPromise = clsPromise || clsImport();
            return clsPromise.then((cls) => new cls(...(args as never[])));
        }
    })

    return cls as (new (...args: ConstructorParameters<C>) => InstanceType<C> & Promise<InstanceType<C>>);
}
