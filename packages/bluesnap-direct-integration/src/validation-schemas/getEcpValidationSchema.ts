import { memoize } from '@bigcommerce/memoize';
import { object, ObjectSchema, string } from 'yup';

export default memoize(function getEcpValidationSchema(): ObjectSchema {
    return object({
        accountNumber: string()
            .required('Account Number is required')
            .matches(/^\d+$/, 'Account Number must contain only numbers')
            .min(8, 'Account Number must have at least 8 digits'),
        routingNumber: string()
            .required('Routing Number is required')
            .matches(/^\d+$/, 'Routing Number must contain only numbers')
            .length(9, 'Routing Number must be 9 digits long'),
        accountType: string().required('Account Type is required'),
    });
});
