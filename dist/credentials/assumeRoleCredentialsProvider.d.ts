import { CredentialsProvider } from "./credentialsProvider";
import { Credentials } from "../interceptor";
export declare class AssumeRoleCredentialsProvider implements CredentialsProvider {
    private options;
    private sts;
    private credentials?;
    private expiration?;
    constructor(options: AssumeRoleCredentialsProviderOptions);
    getCredentials(): Promise<Credentials>;
    private areCredentialsExpired;
    private assumeRole;
}
export interface AssumeRoleCredentialsProviderOptions {
    roleArn: string;
    region?: string;
    expirationMarginSec?: number;
}
export interface ResolvedAssumeRoleCredentialsProviderOptions {
    roleArn: string;
    region?: string;
    expirationMarginSec: number;
}
