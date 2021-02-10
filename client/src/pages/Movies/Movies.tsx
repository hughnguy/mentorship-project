import React from "react";
import { useQuery } from "@shopify/react-graphql";
import { useI18n } from "@shopify/react-i18n";
import SearchQuery from "./graphql/SearchQuery.graphql";
import { useUrl } from "../../utils/url";
import { Results } from "./components";

export const Movies = () => {
  const [i18n] = useI18n();

  const { data, loading, error } = useQuery(SearchQuery, {
    variables: { term: "rambo" },
  });

  if (loading) {
    return <div>{i18n.translate("Admin.loading")}</div>;
  }

  return <Results movies={data.search.movies} />;
};
