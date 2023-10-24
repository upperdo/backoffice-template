/**
 * @name parseEnumValue
 * @param enumType 
 * @param value 
 * 
 * @description Function that parse the value of a given enum type
 * @returns value of the enumType 
 */
export const parseEnumValue = (enumType: any, value: any): any | null =>{
    if(value){
        for (const key in enumType){
            if(enumType[key] === value) {
                return value;
            }
        }
    }
    return null;
}