import { WebPlugin } from "@capacitor/core";
import type { CapacitorPurchasesPlugin, LogInResult, CustomerInfo, Offerings, Offering, Package } from "./definitions";
export declare const mockPackA: Package;
export declare const mockPackM: Package;
export declare const mockCurrent: Offering;
export declare const mockCustomerInfo: CustomerInfo;
export declare const mockAll: {
    [key: string]: Offering;
};
export declare const mockOffering: Offerings;
export declare class CapacitorPurchasesWeb extends WebPlugin implements CapacitorPurchasesPlugin {
    setup(data: {
        apiKey: string;
    }): Promise<void>;
    getOfferings(): Promise<{
        offerings: Offerings;
    }>;
    purchasePackage(data: {
        identifier: string;
        offeringIdentifier: string;
    }): Promise<{
        customerInfo: CustomerInfo;
    }>;
    restorePurchases(): Promise<{
        customerInfo: CustomerInfo;
    }>;
    setAttributes(data: {
        attributes: {
            [key: string]: string | null;
        };
    }): Promise<void>;
    logIn(data: {
        appUserID: string;
    }): Promise<LogInResult>;
    logOut(): Promise<{
        customerInfo: CustomerInfo;
    }>;
    getCustomerInfo(): Promise<{
        customerInfo: CustomerInfo;
    }>;
    setDebugLogsEnabled(data: {
        enabled: boolean;
    }): Promise<void>;
}
