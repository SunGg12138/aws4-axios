import { AxiosRequestConfig, AxiosRequestHeaders, Method } from "axios";
import { CredentialsProvider } from ".";
export interface InterceptorOptions {
    /**
     * Target service. Will use default aws4 behavior if not given.
     */
    service?: string;
    /**
     * AWS region name. Will use default aws4 behavior if not given.
     */
    region?: string;
    /**
     * Whether to sign query instead of adding Authorization header. Default to false.
     */
    signQuery?: boolean;
    /**
     * ARN of the IAM Role to be assumed to get the credentials from.
     * The credentials will be cached and automatically refreshed as needed.
     * Will not be used if credentials are provided.
     */
    assumeRoleArn?: string;
    /**
     * Number of seconds before the assumed Role expiration
     * to invalidate the cache.
     * Used only if assumeRoleArn is provided.
     */
    assumedRoleExpirationMarginSec?: number;
}
export interface SigningOptions {
    host?: string;
    headers?: AxiosRequestHeaders;
    path?: string;
    body?: unknown;
    region?: string;
    service?: string;
    signQuery?: boolean;
    method?: string;
}
export interface Credentials {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
}
export declare type InternalAxiosHeaders = Record<Method | "common", Record<string, string>>;
/**
 * Create an interceptor to add to the Axios request chain. This interceptor
 * will sign requests with the AWSv4 signature.
 *
 * @example
 * axios.interceptors.request.use(
 *     aws4Interceptor({ region: "eu-west-2", service: "execute-api" })
 * );
 *
 * @param options The options to be used when signing a request
 * @param credentials Credentials to be used to sign the request
 */
export declare const aws4Interceptor: (options?: InterceptorOptions | undefined, credentials?: CredentialsProvider | Credentials | undefined) => (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>;
