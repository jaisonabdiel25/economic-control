import { envs } from "./config/env";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
    main();
})();


async function main() {
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start();
}