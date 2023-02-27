import { Home } from "~/pages";
import { DefaultLayout } from "~/layouts";

const privateRoutes = [];
const publicRoutes = [{ path: "/", component: Home, layout: DefaultLayout }];

export { privateRoutes, publicRoutes };
