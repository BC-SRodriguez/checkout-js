import React, { FunctionComponent, memo } from 'react';

import { CheckboxFormField, Fieldset, Legend } from '@bigcommerce/checkout/ui';

import BlueSnapDirectNumberField from './BlueSnapDirectNumberField';
import BlueSnapDirectSelectField from './BlueSnapDirectSelectField';

export interface BlueSnapDirectEcpFieldsetProps {
    useFloatingLabel?: boolean;
    onPermissionChange: (shopperPermission: boolean) => void;
}

const BlueSnapDirectEcpFieldset: FunctionComponent<BlueSnapDirectEcpFieldsetProps> = ({
    useFloatingLabel,
    onPermissionChange,
}) => {
    const options = {
        helperLabel: 'Select an account type',
        items: [
            { label: 'Consumer checking', value: 'CONSUMER_CHECKING' },
            { label: 'Consumer savings', value: 'CONSUMER_SAVINGS' },
            { label: 'Corporate checking', value: 'CORPORATE_CHECKING' },
            { label: 'Corporate savings', value: 'CORPORATE_SAVINGS' },
        ],
    };

    return (
        <Fieldset
            legend={<Legend hidden>Electronic Check (ACH/ECP)</Legend>}
            style={{ paddingBottom: '1rem' }}
        >
            <BlueSnapDirectNumberField
                labelContent="Account Number"
                maxLength={17}
                name="accountNumber"
                useFloatingLabel={useFloatingLabel}
            />

            <BlueSnapDirectNumberField
                labelContent="Routing Number"
                maxLength={9}
                name="routingNumber"
                useFloatingLabel={useFloatingLabel}
            />

            <BlueSnapDirectSelectField
                labelContent="Account Type"
                name="accountType"
                options={options}
                useFloatingLabel={useFloatingLabel}
            />

            <CheckboxFormField
                labelContent="I authorize this Electronic Check (ACH/ECP) transaction and agree to this debit
                of my account."
                name="shopperPermission"
                onChange={onPermissionChange}
            />
        </Fieldset>
    );
};

export default memo(BlueSnapDirectEcpFieldset);
