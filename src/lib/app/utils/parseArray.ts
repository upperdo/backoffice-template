export function parseJsonArray<T>(jsonArray: any[]): T[] {
  
      const parsedObjects = jsonArray.map((jsonString) =>
        JSON.parse(jsonString) as T
      );
      return parsedObjects;
  }