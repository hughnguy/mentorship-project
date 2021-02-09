import React from 'react';
import {useQuery} from '@shopify/react-graphql';
import {useI18n} from '@shopify/react-i18n';
import RatesQuery from './graphql/RatesQuery.graphql';
import {useUrl} from '../../utils/url';

export const Example = () => {
    const [i18n] = useI18n();

    const url = useUrl();

    const {data, loading, error} = useQuery(RatesQuery, {
        variables: { currency: "USD" }
    });

    const test = async () => {
        const result = await new Promise((resolve) => {
            resolve("Hiii")
        });
        console.log(result)
    };

    if(loading) {
        return (
            <div>
                {i18n.translate('Admin.loading')}
            </div>
        );
    } else {
        return (
            <>
                <div onClick={() => test()}>
                    {i18n.translate('Admin.heading')}
                </div>
                <div>
                    {url.root()}
                    {JSON.stringify(data)}
                </div>
            </>
        );
    }
};
