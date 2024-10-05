import React, { memo } from "react";
import CountriesList from "@/components/countries/countries-list";
import { Country } from "@/types";
import LayoutWrapper from "@/components/layout";

// Memoize these components to avoid unnecessary re-renders

const MemoizedCountriesList = memo(CountriesList);

export default async function HomePage() {
  // No changes here for fetching data
  const countries = (await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  )) as Country[];

  return (
    <>
      <LayoutWrapper>
        <MemoizedCountriesList countries={countries} />
      </LayoutWrapper>
    </>
  );
}
