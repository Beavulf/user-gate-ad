import { registerDecorator, type ValidationOptions, type ValidationArguments} from "class-validator";

export function StartsWith(prefex: string, validationOptions?: ValidationOptions) {
    return (object: Object, propertyName: string) => {
        registerDecorator({
            name:'startsWith', 
            target: object.constructor, 
            propertyName: propertyName, 
            options: validationOptions, 
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return typeof value === 'string' && value.startsWith(prefex);
                },
                defaultMessage(args: ValidationArguments) {
                    return `Названиме должно начинаться с ${prefex}`
                }
            },
            
        })
    }
}