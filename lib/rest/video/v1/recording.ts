/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type RecordingCodec = "VP8" | "H264" | "OPUS" | "PCMU";

type RecordingFormat = "mka" | "mkv";

type RecordingStatus = "processing" | "completed" | "deleted" | "failed";

type RecordingType = "audio" | "video" | "data";

/**
 * Options to pass to each
 */
export interface RecordingListInstanceEachOptions {
  /** Read only the recordings that have this status. Can be: `processing`, `completed`, or `deleted`. */
  status?: RecordingStatus;
  /** Read only the recordings that have this `source_sid`. */
  sourceSid?: string;
  /** Read only recordings with this `grouping_sid`, which may include a `participant_sid` and/or a `room_sid`. */
  groupingSid?: Array<string>;
  /** Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone. */
  dateCreatedAfter?: Date;
  /** Read only recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone, given as `YYYY-MM-DDThh:mm:ss+|-hh:mm` or `YYYY-MM-DDThh:mm:ssZ`. */
  dateCreatedBefore?: Date;
  /** Read only recordings that have this media type. Can be either `audio` or `video`. */
  mediaType?: RecordingType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface RecordingListInstanceOptions {
  /** Read only the recordings that have this status. Can be: `processing`, `completed`, or `deleted`. */
  status?: RecordingStatus;
  /** Read only the recordings that have this `source_sid`. */
  sourceSid?: string;
  /** Read only recordings with this `grouping_sid`, which may include a `participant_sid` and/or a `room_sid`. */
  groupingSid?: Array<string>;
  /** Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone. */
  dateCreatedAfter?: Date;
  /** Read only recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone, given as `YYYY-MM-DDThh:mm:ss+|-hh:mm` or `YYYY-MM-DDThh:mm:ssZ`. */
  dateCreatedBefore?: Date;
  /** Read only recordings that have this media type. Can be either `audio` or `video`. */
  mediaType?: RecordingType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface RecordingListInstancePageOptions {
  /** Read only the recordings that have this status. Can be: `processing`, `completed`, or `deleted`. */
  status?: RecordingStatus;
  /** Read only the recordings that have this `source_sid`. */
  sourceSid?: string;
  /** Read only recordings with this `grouping_sid`, which may include a `participant_sid` and/or a `room_sid`. */
  groupingSid?: Array<string>;
  /** Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone. */
  dateCreatedAfter?: Date;
  /** Read only recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone, given as `YYYY-MM-DDThh:mm:ss+|-hh:mm` or `YYYY-MM-DDThh:mm:ssZ`. */
  dateCreatedBefore?: Date;
  /** Read only recordings that have this media type. Can be either `audio` or `video`. */
  mediaType?: RecordingType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface RecordingContext {
  /**
   * Remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingContextSolution {
  sid: string;
}

export class RecordingContextImpl implements RecordingContext {
  protected _solution: RecordingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Recordings/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RecordingInstance(operationVersion, payload, instance._solution.sid)
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

export type RecordingStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface RecordingPayload extends TwilioResponsePayload {
  recordings: RecordingResource[];
}

interface RecordingResource {
  account_sid: string;
  status: RecordingStatus;
  date_created: Date;
  sid: string;
  source_sid: string;
  size: number;
  url: string;
  type: RecordingType;
  duration: number;
  container_format: RecordingFormat;
  codec: RecordingCodec;
  grouping_sids: any;
  track_name: string;
  offset: number;
  media_external_location: string;
  status_callback: string;
  status_callback_method: RecordingStatusCallbackMethod;
  links: Record<string, string>;
}

export class RecordingInstance {
  protected _solution: RecordingContextSolution;
  protected _context?: RecordingContext;

  constructor(
    protected _version: V1,
    payload: RecordingResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.status = payload.status;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.sid = payload.sid;
    this.sourceSid = payload.source_sid;
    this.size = payload.size;
    this.url = payload.url;
    this.type = payload.type;
    this.duration = deserialize.integer(payload.duration);
    this.containerFormat = payload.container_format;
    this.codec = payload.codec;
    this.groupingSids = payload.grouping_sids;
    this.trackName = payload.track_name;
    this.offset = payload.offset;
    this.mediaExternalLocation = payload.media_external_location;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  status: RecordingStatus;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the recording source
   */
  sourceSid: string;
  /**
   * The size of the recorded track, in bytes
   */
  size: number;
  /**
   * The absolute URL of the resource
   */
  url: string;
  type: RecordingType;
  /**
   * The duration of the recording in seconds
   */
  duration: number;
  containerFormat: RecordingFormat;
  codec: RecordingCodec;
  /**
   * A list of SIDs related to the recording
   */
  groupingSids: any;
  /**
   * The name that was given to the source track of the recording
   */
  trackName: string;
  /**
   * The number of milliseconds between a point in time that is common to all rooms in a group and when the source room of the recording started
   */
  offset: number;
  /**
   * The URL of the media file associated with the recording when stored externally
   */
  mediaExternalLocation: string;
  /**
   * The URL called to send status information on every recording event.
   */
  statusCallback: string;
  /**
   * The HTTP method used to call `status_callback`
   */
  statusCallbackMethod: RecordingStatusCallbackMethod;
  /**
   * The URLs of related resources
   */
  links: Record<string, string>;

  private get _proxy(): RecordingContext {
    this._context =
      this._context ||
      new RecordingContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance> {
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
      status: this.status,
      dateCreated: this.dateCreated,
      sid: this.sid,
      sourceSid: this.sourceSid,
      size: this.size,
      url: this.url,
      type: this.type,
      duration: this.duration,
      containerFormat: this.containerFormat,
      codec: this.codec,
      groupingSids: this.groupingSids,
      trackName: this.trackName,
      offset: this.offset,
      mediaExternalLocation: this.mediaExternalLocation,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RecordingSolution {}

export interface RecordingListInstance {
  _version: V1;
  _solution: RecordingSolution;
  _uri: string;

  (sid: string): RecordingContext;
  get(sid: string): RecordingContext;

  /**
   * Streams RecordingInstance records from the API.
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
   * @param { RecordingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: RecordingInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: RecordingListInstanceEachOptions,
    callback?: (item: RecordingInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RecordingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RecordingInstance[]) => any
  ): Promise<RecordingInstance[]>;
  list(
    params: RecordingListInstanceOptions,
    callback?: (error: Error | null, items: RecordingInstance[]) => any
  ): Promise<RecordingInstance[]>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RecordingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;
  page(
    params: RecordingListInstancePageOptions,
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function RecordingListInstance(version: V1): RecordingListInstance {
  const instance = ((sid) => instance.get(sid)) as RecordingListInstance;

  instance.get = function get(sid): RecordingContext {
    return new RecordingContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Recordings`;

  instance.page = function page(
    params?:
      | RecordingListInstancePageOptions
      | ((error: Error | null, items: RecordingPage) => any),
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["sourceSid"] !== undefined)
      data["SourceSid"] = params["sourceSid"];
    if (params["groupingSid"] !== undefined)
      data["GroupingSid"] = serialize.map(
        params["groupingSid"],
        (e: string) => e
      );
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
    if (params["mediaType"] !== undefined)
      data["MediaType"] = params["mediaType"];
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
        new RecordingPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new RecordingPage(instance._version, payload, instance._solution)
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

export class RecordingPage extends Page<
  V1,
  RecordingPayload,
  RecordingResource,
  RecordingInstance
> {
  /**
   * Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: RecordingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RecordingResource): RecordingInstance {
    return new RecordingInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}