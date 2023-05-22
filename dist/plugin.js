var capacitorCapacitorPurchases = (function (exports, core) {
    'use strict';

    exports.ATTRIBUTION_NETWORK = void 0;
    (function (ATTRIBUTION_NETWORK) {
        ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["APPLE_SEARCH_ADS"] = 0] = "APPLE_SEARCH_ADS";
        ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["ADJUST"] = 1] = "ADJUST";
        ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["APPSFLYER"] = 2] = "APPSFLYER";
        ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["BRANCH"] = 3] = "BRANCH";
        ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["TENJIN"] = 4] = "TENJIN";
        ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["FACEBOOK"] = 5] = "FACEBOOK";
    })(exports.ATTRIBUTION_NETWORK || (exports.ATTRIBUTION_NETWORK = {}));
    exports.PURCHASE_TYPE = void 0;
    (function (PURCHASE_TYPE) {
        /**
         * A type of SKU for in-app products.
         */
        PURCHASE_TYPE["INAPP"] = "inapp";
        /**
         * A type of SKU for subscriptions.
         */
        PURCHASE_TYPE["SUBS"] = "subs";
    })(exports.PURCHASE_TYPE || (exports.PURCHASE_TYPE = {}));
    /**
     * Enum for billing features.
     * Currently, these are only relevant for Google Play Android users:
     * https://developer.android.com/reference/com/android/billingclient/api/BillingClient.FeatureType
     */
    exports.BILLING_FEATURE = void 0;
    (function (BILLING_FEATURE) {
        /**
         * Purchase/query for subscriptions.
         */
        BILLING_FEATURE[BILLING_FEATURE["SUBSCRIPTIONS"] = 0] = "SUBSCRIPTIONS";
        /**
         * Subscriptions update/replace.
         */
        BILLING_FEATURE[BILLING_FEATURE["SUBSCRIPTIONS_UPDATE"] = 1] = "SUBSCRIPTIONS_UPDATE";
        /**
         * Purchase/query for in-app items on VR.
         */
        BILLING_FEATURE[BILLING_FEATURE["IN_APP_ITEMS_ON_VR"] = 2] = "IN_APP_ITEMS_ON_VR";
        /**
         * Purchase/query for subscriptions on VR.
         */
        BILLING_FEATURE[BILLING_FEATURE["SUBSCRIPTIONS_ON_VR"] = 3] = "SUBSCRIPTIONS_ON_VR";
        /**
         * Launch a price change confirmation flow.
         */
        BILLING_FEATURE[BILLING_FEATURE["PRICE_CHANGE_CONFIRMATION"] = 4] = "PRICE_CHANGE_CONFIRMATION";
    })(exports.BILLING_FEATURE || (exports.BILLING_FEATURE = {}));
    exports.PRORATION_MODE = void 0;
    (function (PRORATION_MODE) {
        PRORATION_MODE[PRORATION_MODE["UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY"] = 0] = "UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY";
        /**
         * Replacement takes effect immediately, and the remaining time will be
         * prorated and credited to the user. This is the current default behavior.
         */
        PRORATION_MODE[PRORATION_MODE["IMMEDIATE_WITH_TIME_PRORATION"] = 1] = "IMMEDIATE_WITH_TIME_PRORATION";
        /**
         * Replacement takes effect immediately, and the billing cycle remains the
         * same. The price for the remaining period will be charged. This option is
         * only available for subscription upgrade.
         */
        PRORATION_MODE[PRORATION_MODE["IMMEDIATE_AND_CHARGE_PRORATED_PRICE"] = 2] = "IMMEDIATE_AND_CHARGE_PRORATED_PRICE";
        /**
         * Replacement takes effect immediately, and the new price will be charged on
         * next recurrence time. The billing cycle stays the same.
         */
        PRORATION_MODE[PRORATION_MODE["IMMEDIATE_WITHOUT_PRORATION"] = 3] = "IMMEDIATE_WITHOUT_PRORATION";
        /**
         * Replacement takes effect when the old plan expires, and the new price will
         * be charged at the same time.
         */
        PRORATION_MODE[PRORATION_MODE["DEFERRED"] = 4] = "DEFERRED";
    })(exports.PRORATION_MODE || (exports.PRORATION_MODE = {}));
    exports.PACKAGE_TYPE = void 0;
    (function (PACKAGE_TYPE) {
        /**
         * A package that was defined with a custom identifier.
         */
        PACKAGE_TYPE["UNKNOWN"] = "UNKNOWN";
        /**
         * A package that was defined with a custom identifier.
         */
        PACKAGE_TYPE["CUSTOM"] = "CUSTOM";
        /**
         * A package configured with the predefined lifetime identifier.
         */
        PACKAGE_TYPE["LIFETIME"] = "LIFETIME";
        /**
         * A package configured with the predefined annual identifier.
         */
        PACKAGE_TYPE["ANNUAL"] = "ANNUAL";
        /**
         * A package configured with the predefined six month identifier.
         */
        PACKAGE_TYPE["SIX_MONTH"] = "SIX_MONTH";
        /**
         * A package configured with the predefined three month identifier.
         */
        PACKAGE_TYPE["THREE_MONTH"] = "THREE_MONTH";
        /**
         * A package configured with the predefined two month identifier.
         */
        PACKAGE_TYPE["TWO_MONTH"] = "TWO_MONTH";
        /**
         * A package configured with the predefined monthly identifier.
         */
        PACKAGE_TYPE["MONTHLY"] = "MONTHLY";
        /**
         * A package configured with the predefined weekly identifier.
         */
        PACKAGE_TYPE["WEEKLY"] = "WEEKLY";
    })(exports.PACKAGE_TYPE || (exports.PACKAGE_TYPE = {}));
    exports.INTRO_ELIGIBILITY_STATUS = void 0;
    (function (INTRO_ELIGIBILITY_STATUS) {
        /**
         * RevenueCat doesn't have enough information to determine eligibility.
         */
        INTRO_ELIGIBILITY_STATUS[INTRO_ELIGIBILITY_STATUS["INTRO_ELIGIBILITY_STATUS_UNKNOWN"] = 0] = "INTRO_ELIGIBILITY_STATUS_UNKNOWN";
        /**
         * The user is not eligible for a free trial or intro pricing for this product.
         */
        INTRO_ELIGIBILITY_STATUS[INTRO_ELIGIBILITY_STATUS["INTRO_ELIGIBILITY_STATUS_INELIGIBLE"] = 1] = "INTRO_ELIGIBILITY_STATUS_INELIGIBLE";
        /**
         * The user is eligible for a free trial or intro pricing for this product.
         */
        INTRO_ELIGIBILITY_STATUS[INTRO_ELIGIBILITY_STATUS["INTRO_ELIGIBILITY_STATUS_ELIGIBLE"] = 2] = "INTRO_ELIGIBILITY_STATUS_ELIGIBLE";
    })(exports.INTRO_ELIGIBILITY_STATUS || (exports.INTRO_ELIGIBILITY_STATUS = {}));

    const CapacitorPurchases = core.registerPlugin("CapacitorPurchases", {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorPurchasesWeb()),
    });

    const mockPackA = {
        identifier: "com.example.test",
        packageType: exports.PACKAGE_TYPE.ANNUAL,
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
    const mockPackM = {
        identifier: "com.example.test",
        packageType: exports.PACKAGE_TYPE.MONTHLY,
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
    const mockCurrent = {
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
    const mockCustomerInfo = {
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
    const mockAll = {
        current: mockCurrent,
    };
    const mockOffering = {
        all: mockAll,
        current: mockCurrent,
    };
    class CapacitorPurchasesWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorPurchasesWeb: CapacitorPurchasesWeb,
        mockAll: mockAll,
        mockCurrent: mockCurrent,
        mockCustomerInfo: mockCustomerInfo,
        mockOffering: mockOffering,
        mockPackA: mockPackA,
        mockPackM: mockPackM
    });

    exports.CapacitorPurchases = CapacitorPurchases;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
