import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '699899ff7cmsh03171f9930b3efep1fe263jsna5c8fc8fb596',
//       'X-RapidAPI-Host': ''
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


// ============================for more details look for redux tool kit documentation===============
export const shazamCoreApi=createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
                headers.set('X-RapidAPI-Key','699899ff7cmsh03171f9930b3efep1fe263jsna5c8fc8fb596')
            return headers;
            }
       
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query:()=>'/charts/world'}),
        getSongDetails:builder.query({query:({songid})=> `/tracks/details?track_id=${songid}`}),
        getSongRelated:builder.query({query:({songid})=>`/tracks/related?track_id=${songid}`})
    })
})

export const {
    useGetTopChartsQuery,  //this is a hook
    useGetSongDetailsQuery,
    useGetSongRelatedQuery
} =shazamCoreApi