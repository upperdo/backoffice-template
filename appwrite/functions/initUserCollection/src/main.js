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
    const databases = new Databases(client);
    
    const databaseId = APPWRITE_DATABASE_ID; 
    const collectionId = APPWRITE_COLLECTION_ID;
    
    const body = req.body;

    const userId = req.body.$id;
    
    const data = { name: body.name, lastName: "",
      email: body.email, roles: ["USER"]
    }

    await databases.createDocument(databaseId, collectionId, userId, data, [
        Permission.read(Role.user(userId)),
        Permission.update(Role.user(userId))
      ]);

    log("Success");
    
    return res.json({ok: true})
  }catch(e){
    error(e);
    return res.json({ok: false})
  }
};
