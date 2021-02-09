import React from 'react';
import {createMount} from '@shopify/react-testing';

export const mountWithAppContext = createMount<any, any, true>({
    render(
        element,
        {},
        {locale = 'en', country = 'CA', timezone = 'America/Toronto'},
    ) {
        return element;
    },
    async afterMount() {},
});
