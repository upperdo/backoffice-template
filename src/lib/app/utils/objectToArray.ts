export function objectToArray(obj: any) {
    return Object.keys(obj).map((key) => {
      const item = obj[key];
      return { [key]: item[key] };
    });
  }