/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type BrandVettingVettingProvider = "campaign-verify";

/**
 * Options to pass to create a BrandVettingInstance
 */
export interface BrandVettingListInstanceCreateOptions {
  /**  */
  vettingProvider: BrandVettingVettingProvider;
  /** The unique ID of the vetting */
  vettingId?: string;
}
/**
 * Options to pass to each
 */
export interface BrandVettingListInstanceEachOptions {
  /** The third-party provider of the vettings to read */
  vettingProvider?: BrandVettingVettingProvider;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface BrandVettingListInstanceOptions {
  /** The third-party provider of the vettings to read */
  vettingProvider?: BrandVettingVettingProvider;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface BrandVettingListInstancePageOptions {
  /** The third-party provider of the vettings to read */
  vettingProvider?: BrandVettingVettingProvider;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface BrandVettingContext {
  /**
   * Fetch a BrandVettingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandVettingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BrandVettingInstance) => any
  ): Promise<BrandVettingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BrandVettingContextSolution {
  brandSid: string;
  brandVettingSid: string;
}

export class BrandVettingContextImpl implements BrandVettingContext {
  protected _solution: BrandVettingContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    brandSid: string,
    brandVettingSid: string
  ) {
    if (!isValidPathParam(brandSid)) {
      throw new Error("Parameter 'brandSid' is not valid.");
    }

    if (!isValidPathParam(brandVettingSid)) {
      throw new Error("Parameter 'brandVettingSid' is not valid.");
    }

    this._solution = { brandSid, brandVettingSid };
    this._uri = `/a2p/BrandRegistrations/${brandSid}/Vettings/${brandVettingSid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: BrandVettingInstance) => any
  ): Promise<BrandVettingInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BrandVettingInstance(
          operationVersion,
          payload,
          instance._solution.brandSid,
          instance._solution.brandVettingSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface BrandVettingPayload extends TwilioResponsePayload {
  data: BrandVettingResource[];
}

interface BrandVettingResource {
  account_sid: string;
  brand_sid: string;
  brand_vetting_sid: string;
  date_updated: Date;
  date_created: Date;
  vetting_id: string;
  vetting_class: string;
  vetting_status: string;
  vetting_provider: BrandVettingVettingProvider;
  url: string;
}

export class BrandVettingInstance {
  protected _solution: BrandVettingContextSolution;
  protected _context?: BrandVettingContext;

  constructor(
    protected _version: V1,
    payload: BrandVettingResource,
    brandSid: string,
    brandVettingSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.brandSid = payload.brand_sid;
    this.brandVettingSid = payload.brand_vetting_sid;
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.vettingId = payload.vetting_id;
    this.vettingClass = payload.vetting_class;
    this.vettingStatus = payload.vetting_status;
    this.vettingProvider = payload.vetting_provider;
    this.url = payload.url;

    this._solution = {
      brandSid,
      brandVettingSid: brandVettingSid || this.brandVettingSid,
    };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the vetting record.
   */
  accountSid: string;
  /**
   * The unique string to identify Brand Registration.
   */
  brandSid: string;
  /**
   * The Twilio SID of the third-party vetting record.
   */
  brandVettingSid: string;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The unique identifier of the vetting from the third-party provider.
   */
  vettingId: string;
  /**
   * The type of vetting that has been conducted. One of “STANDARD” (Aegis) or “POLITICAL” (Campaign Verify).
   */
  vettingClass: string;
  /**
   * The status of the import vetting attempt. One of “PENDING,” “SUCCESS,” or “FAILED”.
   */
  vettingStatus: string;
  vettingProvider: BrandVettingVettingProvider;
  /**
   * The absolute URL of the Brand Vetting resource.
   */
  url: string;

  private get _proxy(): BrandVettingContext {
    this._context =
      this._context ||
      new BrandVettingContextImpl(
        this._version,
        this._solution.brandSid,
        this._solution.brandVettingSid
      );
    return this._context;
  }

  /**
   * Fetch a BrandVettingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandVettingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BrandVettingInstance) => any
  ): Promise<BrandVettingInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      brandSid: this.brandSid,
      brandVettingSid: this.brandVettingSid,
      dateUpdated: this.dateUpdated,
      dateCreated: this.dateCreated,
      vettingId: this.vettingId,
      vettingClass: this.vettingClass,
      vettingStatus: this.vettingStatus,
      vettingProvider: this.vettingProvider,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BrandVettingSolution {
  brandSid: string;
}

export interface BrandVettingListInstance {
  _version: V1;
  _solution: BrandVettingSolution;
  _uri: string;

  (brandVettingSid: string): BrandVettingContext;
  get(brandVettingSid: string): BrandVettingContext;

  /**
   * Create a BrandVettingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandVettingInstance
   */
  create(
    params: BrandVettingListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BrandVettingInstance) => any
  ): Promise<BrandVettingInstance>;

  /**
   * Streams BrandVettingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandVettingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: BrandVettingListInstanceEachOptions,
    callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BrandVettingPage) => any
  ): Promise<BrandVettingPage>;
  /**
   * Lists BrandVettingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandVettingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BrandVettingInstance[]) => any
  ): Promise<BrandVettingInstance[]>;
  list(
    params: BrandVettingListInstanceOptions,
    callback?: (error: Error | null, items: BrandVettingInstance[]) => any
  ): Promise<BrandVettingInstance[]>;
  /**
   * Retrieve a single page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandVettingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BrandVettingPage) => any
  ): Promise<BrandVettingPage>;
  page(
    params: BrandVettingListInstancePageOptions,
    callback?: (error: Error | null, items: BrandVettingPage) => any
  ): Promise<BrandVettingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BrandVettingListInstance(
  version: V1,
  brandSid: string
): BrandVettingListInstance {
  if (!isValidPathParam(brandSid)) {
    throw new Error("Parameter 'brandSid' is not valid.");
  }

  const instance = ((brandVettingSid) =>
    instance.get(brandVettingSid)) as BrandVettingListInstance;

  instance.get = function get(brandVettingSid): BrandVettingContext {
    return new BrandVettingContextImpl(version, brandSid, brandVettingSid);
  };

  instance._version = version;
  instance._solution = { brandSid };
  instance._uri = `/a2p/BrandRegistrations/${brandSid}/Vettings`;

  instance.create = function create(
    params: BrandVettingListInstanceCreateOptions,
    callback?: (error: Error | null, items: BrandVettingInstance) => any
  ): Promise<BrandVettingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["vettingProvider"] === null ||
      params["vettingProvider"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['vettingProvider']\" missing."
      );
    }

    let data: any = {};

    data["VettingProvider"] = params["vettingProvider"];
    if (params["vettingId"] !== undefined)
      data["VettingId"] = params["vettingId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BrandVettingInstance(
          operationVersion,
          payload,
          instance._solution.brandSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | BrandVettingListInstancePageOptions
      | ((error: Error | null, items: BrandVettingPage) => any),
    callback?: (error: Error | null, items: BrandVettingPage) => any
  ): Promise<BrandVettingPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["vettingProvider"] !== undefined)
      data["VettingProvider"] = params["vettingProvider"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BrandVettingPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BrandVettingPage) => any
  ): Promise<BrandVettingPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new BrandVettingPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class BrandVettingPage extends Page<
  V1,
  BrandVettingPayload,
  BrandVettingResource,
  BrandVettingInstance
> {
  /**
   * Initialize the BrandVettingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: BrandVettingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BrandVettingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BrandVettingResource): BrandVettingInstance {
    return new BrandVettingInstance(
      this._version,
      payload,
      this._solution.brandSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}