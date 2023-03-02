import { mount, render } from 'enzyme';
import { Formik } from 'formik';
import { noop } from 'lodash';
import React from 'react';

import BlueSnapDirectEcpFieldset, {
    BlueSnapDirectEcpFieldsetProps,
} from './BlueSnapDirectEcpFieldset';

describe('BlueSnapDirectEcpFieldset', () => {
    let initialValues: { [key: string]: unknown };
    let options: BlueSnapDirectEcpFieldsetProps;

    beforeEach(() => {
        initialValues = {
            accountNumber: '',
            routingNumber: '',
        };
        options = {
            onPermissionChange: jest.fn(),
        };
    });

    it('matches snapshot', () => {
        expect(
            render(
                <Formik initialValues={initialValues} onSubmit={noop}>
                    <BlueSnapDirectEcpFieldset {...options} />
                </Formik>,
            ),
        ).toMatchSnapshot();
    });

    it('should call onPermissionChange callback', () => {
        const component = mount(
            <Formik initialValues={initialValues} onSubmit={noop}>
                <BlueSnapDirectEcpFieldset {...options} />
            </Formik>,
        );

        component
            .find('input[name="shopperPermission"]')
            .simulate('change', { target: { value: true, name: 'shopperPermission' } })
            .update();

        expect(options.onPermissionChange).toHaveBeenCalledWith(true);
    });
});
