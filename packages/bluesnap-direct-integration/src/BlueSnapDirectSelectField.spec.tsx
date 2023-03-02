import { mount } from 'enzyme';
import { Formik } from 'formik';
import { noop } from 'lodash';
import React from 'react';

import BlueSnapDirectSelectField, {
    BlueSnapDirectSelectFieldProps,
} from './BlueSnapDirectSelectField';

describe('BlueSnapDirectSelectField', () => {
    let initialValues: { someOption: string };
    let options: BlueSnapDirectSelectFieldProps;

    beforeEach(() => {
        initialValues = {
            someOption: '',
        };

        options = {
            labelContent: 'Some Option',
            name: 'someOption',
            options: {
                helperLabel: 'Select an option',
                items: [
                    { label: 'Foo', value: 'foo' },
                    { label: 'Bar', value: 'bar' },
                    { label: 'Baz', value: 'baz' },
                ],
            },
        };
    });

    it('allows user to select an option', () => {
        const component = mount(
            <Formik initialValues={initialValues} onSubmit={noop}>
                <BlueSnapDirectSelectField {...options} />
            </Formik>,
        );

        component
            .find('select[name="someOption"]')
            .simulate('change', { target: { value: 'bar', name: 'someOption' } })
            .update();

        expect(component.find('select[name="someOption"]').prop('value')).toBe('bar');
    });
});
