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
        })
    })
});

export const {
    useGetDotaStatsQuery,
    useGetDotaHeroesQuery,
     } = dotaApi

export default dotaApi;