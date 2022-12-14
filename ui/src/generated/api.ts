/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Balance
 */
export interface Balance {
    /**
     * 
     * @type {number}
     * @memberof Balance
     */
    'value': number;
    /**
     * 
     * @type {string}
     * @memberof Balance
     */
    'currency': string;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface LocationInner
 */
export interface LocationInner {
}
/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'value_date': string;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'purpose': string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'currency': string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'origin_iban': string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'receiver_name': string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'receiver_iban': string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'receiver_swift_code': string;
    /**
     * 
     * @type {TransactionCategory}
     * @memberof Transaction
     */
    'category': TransactionCategory;
    /**
     * 
     * @type {TransactionFlow}
     * @memberof Transaction
     */
    'flow': TransactionFlow;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    'balance': number;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    'id': number;
}
/**
 * 
 * @export
 * @interface TransactionByCategory
 */
export interface TransactionByCategory {
    /**
     * 
     * @type {number}
     * @memberof TransactionByCategory
     */
    'amount': number;
    /**
     * 
     * @type {TransactionCategory}
     * @memberof TransactionByCategory
     */
    'category': TransactionCategory;
}
/**
 * 
 * @export
 * @interface TransactionByType
 */
export interface TransactionByType {
    /**
     * 
     * @type {number}
     * @memberof TransactionByType
     */
    'amount': number;
    /**
     * 
     * @type {TransactionFlow}
     * @memberof TransactionByType
     */
    'flow': TransactionFlow;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */

export const TransactionCategory = {
    Barzahlung: 'barzahlung',
    Entertainment: 'entertainment',
    Essen: 'essen',
    Gesundheit: 'gesundheit',
    Versicherung: 'versicherung',
    Lebensmittel: 'lebensmittel',
    Zinsen: 'zinsen',
    Rckerstattung: 'r??ckerstattung',
    Gehalt: 'gehalt',
    Anlage: 'anlage',
    Shopping: 'shopping',
    Steuern: 'steuern',
    Transport: 'transport',
    Reise: 'reise',
    Andere: 'andere'
} as const;

export type TransactionCategory = typeof TransactionCategory[keyof typeof TransactionCategory];


/**
 * An enumeration.
 * @export
 * @enum {string}
 */

export const TransactionFlow = {
    Einkommen: 'einkommen',
    Ausgaben: 'ausgaben'
} as const;

export type TransactionFlow = typeof TransactionFlow[keyof typeof TransactionFlow];


/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<LocationInner>}
     * @memberof ValidationError
     */
    'loc': Array<LocationInner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}

/**
 * BalanceApi - axios parameter creator
 * @export
 */
export const BalanceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBalanceBalanceGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/balance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BalanceApi - functional programming interface
 * @export
 */
export const BalanceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BalanceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBalanceBalanceGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Balance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBalanceBalanceGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BalanceApi - factory interface
 * @export
 */
export const BalanceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BalanceApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBalanceBalanceGet(options?: any): AxiosPromise<Balance> {
            return localVarFp.getBalanceBalanceGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BalanceApi - interface
 * @export
 * @interface BalanceApi
 */
export interface BalanceApiInterface {
    /**
     * 
     * @summary Get Balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceApiInterface
     */
    getBalanceBalanceGet(options?: AxiosRequestConfig): AxiosPromise<Balance>;

}

/**
 * BalanceApi - object-oriented interface
 * @export
 * @class BalanceApi
 * @extends {BaseAPI}
 */
export class BalanceApi extends BaseAPI implements BalanceApiInterface {
    /**
     * 
     * @summary Get Balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceApi
     */
    public getBalanceBalanceGet(options?: AxiosRequestConfig) {
        return BalanceApiFp(this.configuration).getBalanceBalanceGet(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthHealthGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/health`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async healthHealthGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.healthHealthGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthHealthGet(options?: any): AxiosPromise<any> {
            return localVarFp.healthHealthGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     * 
     * @summary Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    healthHealthGet(options?: AxiosRequestConfig): AxiosPromise<any>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * 
     * @summary Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public healthHealthGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).healthHealthGet(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FileUploadApi - axios parameter creator
 * @export
 */
export const FileUploadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Upload Sparkasse Transactions
         * @param {any} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUploadSparkasseTransactionsFileUploadSparkassePost: async (file: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            assertParamExists('createUploadSparkasseTransactionsFileUploadSparkassePost', 'file', file)
            const localVarPath = `/file_upload/sparkasse`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FileUploadApi - functional programming interface
 * @export
 */
export const FileUploadApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FileUploadApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Upload Sparkasse Transactions
         * @param {any} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUploadSparkasseTransactionsFileUploadSparkassePost(file: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUploadSparkasseTransactionsFileUploadSparkassePost(file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FileUploadApi - factory interface
 * @export
 */
export const FileUploadApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FileUploadApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Upload Sparkasse Transactions
         * @param {any} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUploadSparkasseTransactionsFileUploadSparkassePost(file: any, options?: any): AxiosPromise<any> {
            return localVarFp.createUploadSparkasseTransactionsFileUploadSparkassePost(file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FileUploadApi - interface
 * @export
 * @interface FileUploadApi
 */
export interface FileUploadApiInterface {
    /**
     * 
     * @summary Create Upload Sparkasse Transactions
     * @param {any} file 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileUploadApiInterface
     */
    createUploadSparkasseTransactionsFileUploadSparkassePost(file: any, options?: AxiosRequestConfig): AxiosPromise<any>;

}

/**
 * FileUploadApi - object-oriented interface
 * @export
 * @class FileUploadApi
 * @extends {BaseAPI}
 */
export class FileUploadApi extends BaseAPI implements FileUploadApiInterface {
    /**
     * 
     * @summary Create Upload Sparkasse Transactions
     * @param {any} file 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileUploadApi
     */
    public createUploadSparkasseTransactionsFileUploadSparkassePost(file: any, options?: AxiosRequestConfig) {
        return FileUploadApiFp(this.configuration).createUploadSparkasseTransactionsFileUploadSparkassePost(file, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TransactionApi - axios parameter creator
 * @export
 */
export const TransactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Transaction Group By Category
         * @param {string} startDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionGroupByCategoryTransactionsGroupByCategoryGet: async (startDate: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'startDate' is not null or undefined
            assertParamExists('getTransactionGroupByCategoryTransactionsGroupByCategoryGet', 'startDate', startDate)
            const localVarPath = `/transactions/group_by/category`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString().substr(0,10) :
                    startDate;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Transaction Group By Flow
         * @param {string} startDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionGroupByFlowTransactionsGroupByFlowGet: async (startDate: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'startDate' is not null or undefined
            assertParamExists('getTransactionGroupByFlowTransactionsGroupByFlowGet', 'startDate', startDate)
            const localVarPath = `/transactions/group_by/flow`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString().substr(0,10) :
                    startDate;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionTransactionsTransactionIdGet: async (transactionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getTransactionTransactionsTransactionIdGet', 'transactionId', transactionId)
            const localVarPath = `/transactions/{transaction_id}`
                .replace(`{${"transaction_id"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Transactions
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionsTransactionsGet: async (skip?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/transactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionApi - functional programming interface
 * @export
 */
export const TransactionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Transaction Group By Category
         * @param {string} startDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionGroupByCategoryTransactionsGroupByCategoryGet(startDate: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TransactionByCategory>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionGroupByCategoryTransactionsGroupByCategoryGet(startDate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Transaction Group By Flow
         * @param {string} startDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionGroupByFlowTransactionsGroupByFlowGet(startDate: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TransactionByType>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionGroupByFlowTransactionsGroupByFlowGet(startDate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionTransactionsTransactionIdGet(transactionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Transaction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionTransactionsTransactionIdGet(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Transactions
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionsTransactionsGet(skip?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Transaction>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionsTransactionsGet(skip, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionApi - factory interface
 * @export
 */
export const TransactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Transaction Group By Category
         * @param {string} startDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionGroupByCategoryTransactionsGroupByCategoryGet(startDate: string, options?: any): AxiosPromise<Array<TransactionByCategory>> {
            return localVarFp.getTransactionGroupByCategoryTransactionsGroupByCategoryGet(startDate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Transaction Group By Flow
         * @param {string} startDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionGroupByFlowTransactionsGroupByFlowGet(startDate: string, options?: any): AxiosPromise<Array<TransactionByType>> {
            return localVarFp.getTransactionGroupByFlowTransactionsGroupByFlowGet(startDate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Transaction
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionTransactionsTransactionIdGet(transactionId: number, options?: any): AxiosPromise<Transaction> {
            return localVarFp.getTransactionTransactionsTransactionIdGet(transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Transactions
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionsTransactionsGet(skip?: number, limit?: number, options?: any): AxiosPromise<Array<Transaction>> {
            return localVarFp.getTransactionsTransactionsGet(skip, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionApi - interface
 * @export
 * @interface TransactionApi
 */
export interface TransactionApiInterface {
    /**
     * 
     * @summary Get Transaction Group By Category
     * @param {string} startDate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    getTransactionGroupByCategoryTransactionsGroupByCategoryGet(startDate: string, options?: AxiosRequestConfig): AxiosPromise<Array<TransactionByCategory>>;

    /**
     * 
     * @summary Get Transaction Group By Flow
     * @param {string} startDate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    getTransactionGroupByFlowTransactionsGroupByFlowGet(startDate: string, options?: AxiosRequestConfig): AxiosPromise<Array<TransactionByType>>;

    /**
     * 
     * @summary Get Transaction
     * @param {number} transactionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    getTransactionTransactionsTransactionIdGet(transactionId: number, options?: AxiosRequestConfig): AxiosPromise<Transaction>;

    /**
     * 
     * @summary Get Transactions
     * @param {number} [skip] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiInterface
     */
    getTransactionsTransactionsGet(skip?: number, limit?: number, options?: AxiosRequestConfig): AxiosPromise<Array<Transaction>>;

}

/**
 * TransactionApi - object-oriented interface
 * @export
 * @class TransactionApi
 * @extends {BaseAPI}
 */
export class TransactionApi extends BaseAPI implements TransactionApiInterface {
    /**
     * 
     * @summary Get Transaction Group By Category
     * @param {string} startDate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public getTransactionGroupByCategoryTransactionsGroupByCategoryGet(startDate: string, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).getTransactionGroupByCategoryTransactionsGroupByCategoryGet(startDate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Transaction Group By Flow
     * @param {string} startDate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public getTransactionGroupByFlowTransactionsGroupByFlowGet(startDate: string, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).getTransactionGroupByFlowTransactionsGroupByFlowGet(startDate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Transaction
     * @param {number} transactionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public getTransactionTransactionsTransactionIdGet(transactionId: number, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).getTransactionTransactionsTransactionIdGet(transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Transactions
     * @param {number} [skip] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public getTransactionsTransactionsGet(skip?: number, limit?: number, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).getTransactionsTransactionsGet(skip, limit, options).then((request) => request(this.axios, this.basePath));
    }
}


