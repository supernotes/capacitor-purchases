import { WebPlugin } from "@capacitor/core";
import { PACKAGE_TYPE } from "./definitions";
export const mockPackA = {
    identifier: "com.example.test",
    packageType: PACKAGE_TYPE.ANNUAL,
    product: {
        identifier: "com.example.yearly",
        description: "Test",
        title: "Test",
        price: 19.99,
        priceString: "$19.99",
        currencyCode: "USD",
        currencySymbol: "$",
        isFamilyShareable: false,
        subscriptionGroupIdentifier: "com.example.test",
        subscriptionPeriod: {
            numberOfUnits: 1,
            unit: 1,
        },
        introductoryPrice: null,
        discounts: [],
    },
    offeringIdentifier: "com.example.test.offering1",
};
export const mockPackM = {
    identifier: "com.example.test",
    packageType: PACKAGE_TYPE.MONTHLY,
    product: {
        identifier: "com.example.monthly",
        description: "Test",
        title: "Test",
        price: 3.99,
        priceString: "$3.99",
        currencyCode: "USD",
        currencySymbol: "$",
        isFamilyShareable: false,
        subscriptionGroupIdentifier: "com.example.test",
        subscriptionPeriod: {
            numberOfUnits: 1,
            unit: 1,
        },
        introductoryPrice: null,
        discounts: [],
    },
    offeringIdentifier: "com.example.test.offering1",
};
export const mockCurrent = {
    identifier: "com.example.test.offering1",
    serverDescription: "Test offering",
    availablePackages: [mockPackA, mockPackM],
    lifetime: null,
    annual: mockPackA,
    sixMonth: null,
    threeMonth: null,
    twoMonth: null,
    monthly: mockPackM,
    weekly: null,
};
export const mockCustomerInfo = {
    entitlements: {
        all: {},
        active: {},
    },
    activeSubscriptions: [""],
    allPurchasedProductIdentifiers: [""],
    nonSubscriptionTransactions: [],
    latestExpirationDate: null,
    firstSeen: "2020-01-01T00:00:00.000Z",
    originalAppUserId: "",
    requestDate: "2020-01-01T00:00:00.000Z",
    originalApplicationVersion: "",
    originalPurchaseDate: null,
    managementURL: null,
};
export const mockAll = {
    current: mockCurrent,
};
export const mockOffering = {
    all: mockAll,
    current: mockCurrent,
};
export class CapacitorPurchasesWeb extends WebPlugin {
    setup(data) {
        console.error("setup only mocked in web", data);
        return Promise.resolve();
    }
    async getOfferings() {
        console.error("getOfferings only mocked in web");
        return { offerings: mockOffering };
    }
    async purchasePackage(data) {
        console.error("purchasePackage only mocked in web", data);
        return { customerInfo: mockCustomerInfo };
    }
    async restorePurchases() {
        console.error("purchasePackage only mocked in web");
        return { customerInfo: mockCustomerInfo };
    }
    async setAttributes(data) {
        console.error("setAttributes only mocked in web", data);
        return Promise.resolve();
    }
    async logIn(data) {
        console.error("logIn only mocked in web", data);
        return {
            customerInfo: mockCustomerInfo,
            created: true,
        };
    }
    async logOut() {
        console.error("logOut only mocked in web");
        return { customerInfo: mockCustomerInfo };
    }
    async getCustomerInfo() {
        console.error("getCustomerInfo only mocked in web");
        return { customerInfo: mockCustomerInfo };
    }
    async setDebugLogsEnabled(data) {
        console.error("setDebugLogsEnabled only mocked in web", data);
    }
}
//# sourceMappingURL=web.js.map