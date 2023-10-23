/**
 * @class
 * @name Formatter
 * @description Class to format diferent kind of numbers
 */
export class Formatter {
    /**
     * @name formatDate
     * @param dateString 
     * @description Function that return locale date in string format.
     * @returns {string}
     */
    static formatDate(dateString: string): string {
        const date = new Date(dateString);
        
        return date.toLocaleDateString();
    }
    
    /**
     * @name formatCurrency
     * @param amount 0
     * @param currencyCode USD
     * @param locale  en-US
     * @param style currency
     * @description Function to format numbers to currency
     * @returns {number}
     */
    static formatCurrency(amount: number = 0, currencyCode: string = 'USD', locale: string = 'en-US', style: string = 'currency'): string {
         const currency = Intl.NumberFormat(locale, {
            style: style,
            currency: currencyCode
        })

        return currency.format(this.formatValueToNumber(amount));
    }

    /**
     * @name formatValueToNumber
     * @param value 
     * @description Function to convert string values to number
     * @returns {number}
     */
    static formatValueToNumber(value: string | number): number{
        if(typeof value === 'number'){
            return value;
        }else if(typeof value === 'string'){
            const parsedValue = parseFloat(value);

            if(!isNaN(parsedValue)){
                return parsedValue;
            }
        }
        return 0;
    }

    /**
     * @name formatPhoneNumber
     * @param phoneNumber 
     * @description Function to format phone numbers to current format (123) 456-7890
     * @returns {string}
     */
    static formatPhoneNumber(phoneNumber: string): string{
        const cleaned = phoneNumber.replace(/\D/g, '');
        const match = cleaned.match(/(\d{3})(\d{3})(\d{4})/);

        if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
        }

        return phoneNumber;
    }
}