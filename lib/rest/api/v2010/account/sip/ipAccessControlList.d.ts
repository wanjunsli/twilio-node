/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { IpAddressList } from './ipAccessControlList/ipAddress';
import { IpAddressListInstance } from './ipAccessControlList/ipAddress';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the IpAccessControlListList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function IpAccessControlListList(version: V2010, accountSid: string): IpAccessControlListListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 */
interface IpAccessControlListInstanceUpdateOptions {
  friendlyName: string;
}

interface IpAccessControlListListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): IpAccessControlListContext;
  /**
   * create a IpAccessControlListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: IpAccessControlListListInstanceCreateOptions, callback?: (error: Error | null, item: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
  /**
   * Streams IpAccessControlListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: IpAccessControlListListInstanceEachOptions, callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a ip_access_control_list
   *
   * @param sid - Fetch by unique IpAccessControlList Sid
   */
  get(sid: string): IpAccessControlListContext;
  /**
   * Retrieve a single target page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
  /**
   * Lists IpAccessControlListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: IpAccessControlListListInstanceOptions, callback?: (error: Error | null, items: IpAccessControlListInstance[]) => any): Promise<IpAccessControlListInstance[]>;
  /**
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: IpAccessControlListListInstancePageOptions, callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A human readable description of this resource
 */
interface IpAccessControlListListInstanceCreateOptions {
  friendlyName: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface IpAccessControlListListInstanceEachOptions {
  callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface IpAccessControlListListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface IpAccessControlListListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface IpAccessControlListPayload extends IpAccessControlListResource, Page.TwilioResponsePayload {
}

interface IpAccessControlListResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  subresource_uris: string;
  uri: string;
}

interface IpAccessControlListSolution {
  accountSid?: string;
}


declare class IpAccessControlListContext {
  /**
   * Initialize the IpAccessControlListContext
   *
   * @property ipAddresses - ipAddresses resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique IpAccessControlList Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
  ipAddresses: IpAddressListInstance;
  /**
   * remove a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IpAccessControlListInstance) => any): void;
  /**
   * update a IpAccessControlListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: IpAccessControlListInstanceUpdateOptions, callback?: (error: Error | null, items: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
}


declare class IpAccessControlListInstance extends SerializableClass {
  /**
   * Initialize the IpAccessControlListContext
   *
   * @property sid - A string that uniquely identifies this resource
   * @property accountSid - The unique sid that identifies this account
   * @property friendlyName - A human readable description of this resource
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property subresourceUris - The subresource_uris
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique IpAccessControlList Sid
   */
  constructor(version: V2010, payload: IpAccessControlListPayload, accountSid: string, sid: string);

  private _proxy: IpAccessControlListContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IpAccessControlListInstance) => any): void;
  friendlyName: string;
  /**
   * Access the ipAddresses
   */
  ipAddresses(): IpAddressListInstance;
  /**
   * remove a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IpAccessControlListInstance) => any): void;
  sid: string;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the IpAccessControlListInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a IpAccessControlListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: IpAccessControlListInstanceUpdateOptions, callback?: (error: Error | null, items: IpAccessControlListInstance) => any): void;
  uri: string;
}


declare class IpAccessControlListPage extends Page<V2010, IpAccessControlListPayload, IpAccessControlListResource, IpAccessControlListInstance> {
  /**
   * Initialize the IpAccessControlListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: IpAccessControlListSolution);

  /**
   * Build an instance of IpAccessControlListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IpAccessControlListPayload): IpAccessControlListInstance;
}

export { IpAccessControlListContext, IpAccessControlListInstance, IpAccessControlListList, IpAccessControlListListInstance, IpAccessControlListListInstanceCreateOptions, IpAccessControlListListInstanceEachOptions, IpAccessControlListListInstanceOptions, IpAccessControlListListInstancePageOptions, IpAccessControlListPage, IpAccessControlListPayload, IpAccessControlListResource, IpAccessControlListSolution }
