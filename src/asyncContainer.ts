import type { Container, interfaces } from "inversify";

export const asyncContainer = (importContainer: () => Promise<Container>) => {
    let containerPromise: Promise<Container> | undefined
    
    return {
    	getAsync: async <T,>(id: interfaces.ServiceIdentifier<T>) => {
            containerPromise = containerPromise ?? importContainer();
            const container = await containerPromise;
            const result = await container.getAsync<T>(id);
            return result;
        }
    };
}
