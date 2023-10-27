import * as SDK from 'node-appwrite';
import CONSTANTS from '$lib/common/constants';

class SSRAppwriteClient {
  private static instance: SSRAppwriteClient;
  private client: SDK.Client;
  public account: SDK.Account;
  public storage: SDK.Storage;
  public databases: SDK.Databases;
  public functions: SDK.Functions;
  public teams: SDK.Teams;
  public locale: SDK.Locale;
  public graphql: SDK.Graphql;
  public avatars: SDK.Avatars;

  private constructor(jwtToken: string) {
    this.client = new SDK.Client();
    this.client
      .setEndpoint(CONSTANTS.API_CONSTANTS.APPWRITE_ENDPOINT)
      .setProject(CONSTANTS.API_CONSTANTS.PROJECT_ID)
      .setJWT(jwtToken);

    // Initialize Appwrite services
    this.account = new SDK.Account(this.client);
    this.storage = new SDK.Storage(this.client);
    this.databases = new SDK.Databases(this.client);
    this.functions = new SDK.Functions(this.client);
    this.teams = new SDK.Teams(this.client);
    this.locale = new SDK.Locale(this.client);
    this.graphql = new SDK.Graphql(this.client);
    this.avatars = new SDK.Avatars(this.client);
  }

  public static getInstance(jwtToken: string): SSRAppwriteClient {
    if (!SSRAppwriteClient.instance) {
      SSRAppwriteClient.instance = new SSRAppwriteClient(jwtToken);
    }
    return SSRAppwriteClient.instance;
  }
}

export default SSRAppwriteClient;
