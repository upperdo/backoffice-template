export function formatCurrency(amount:number, currencySymbol:string){
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: currencySymbol
    })
}