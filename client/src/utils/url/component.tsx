import React, {useEffect, useState, useMemo} from 'react';
import {I18nContext} from '@shopify/react-i18n';
import {Url} from './url';
import {UrlContext} from './context';

export function UrlProvider({
    children,
    locale,
}: {
    children?: React.ReactNode;
    locale?: string;
}) {
    const i18nManager = React.useContext(I18nContext);
    const [language, setLanguage] = useState(locale);

    useEffect(() => {
        i18nManager?.subscribe([], (_translations, {locale}) => {
            setLanguage(locale);
        });
    }, [i18nManager]);

    const url = useMemo(() => {
        return new Url(language);
    }, [language]);

    return <UrlContext.Provider value={url}>{children}</UrlContext.Provider>;
}
