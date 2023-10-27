import { Client, Databases, Role, Permission } from "node-appwrite"


export default async ({ req, res, log, error }) => {
  try {
    //
    const { APPWRITE_FUNCTION_ENDPOINT, APPWRITE_FUNCTION_PROJECT_ID, APPWRITE_FUNCTION_API_KEY,
      APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID } = process.env;
    //
    const client = new Client();
    client
      .setEndpoint(APPWRITE_FUNCTION_ENDPOINT)
      .setProject(APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(APPWRITE_FUNCTION_API_KEY);
      //

    
    const body = req.body;


    log("Success");
    
    return res.json({ok: true})
  }catch(e){
    error(e);
    return res.json({ok: false})
  }
};
