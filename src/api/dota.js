import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

const dotaApi = createApi({
    reducerPath: 'dotaApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getDotaStats: builder.query({
            query: () => 'api/status/'
        }),
        getDotaHeroes: builder.query({
            query: () => 'api/heroStats/'
        }),
        getDotaHeroAbilities: builder.query({
            query: () => '/api/constants/hero_abilities'
        }),
        getDotaAbilities: builder.query({
            query: () => '/api/constants/abilities'
        })
    })
});

export const {
    useGetDotaStatsQuery,
    useGetDotaHeroesQuery,
    useGetDotaAbilitiesQuery,
    useGetDotaHeroAbilitiesQuery
     } = dotaApi

export default dotaApi;