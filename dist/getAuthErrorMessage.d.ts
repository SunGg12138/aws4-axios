import { AxiosError } from "axios";
/**
 * Utility method for extracting the error message from an API gateway 403
 *
 * @param error The error thrown by Axios
 */
export declare const getAuthErrorMessage: (error: AxiosError) => string | undefined;
