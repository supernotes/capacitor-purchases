import { registerPlugin } from "@capacitor/core";
const CapacitorPurchases = registerPlugin("CapacitorPurchases", {
    web: () => import("./web").then((m) => new m.CapacitorPurchasesWeb()),
});
export * from "./definitions";
export { CapacitorPurchases };
//# sourceMappingURL=index.js.map