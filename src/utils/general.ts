export const tcc = (defaultClass: string, condition: boolean, trueClass: string, falseClass: string = '') => 
    defaultClass + (condition ? ` ${trueClass}` : ` ${falseClass}`)
