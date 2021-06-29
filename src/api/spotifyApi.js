import axios from "axios";

const axiosSpotify = axios.create({
    baseURL:"https://api.spotify.com/v1"
})

export const getAllNewReleases = ()=>axiosSpotify("/browse/new-releases").then(res=>res.data.albums.items)

export const getCategories = (first=5)=>axiosSpotify(`/browse/categories?limit=${first}`).then(res=>res.data.categories.items)

export const searchByCategory = (data)=>axiosSpotify(`/search?q=${data}&type=album&limit=5`).then(res=>res.data.albums.items)

export const getUserPlaylist = ()=>axiosSpotify("/me/playlists").then(res=>res.data.items)

export const getUser = ()=>axiosSpotify("/me").then(res=>res.data.id)

export const getPlaylistById = (playlist_id)=>axiosSpotify(`/playlists/${playlist_id}`).then(res=>res.data)

export const getArtists = (ids)=>axiosSpotify(`/artists?ids=${ids}`).then(res=>res.data.artists)

axiosSpotify.interceptors.request.use((config)=>{
    
    config.headers={
        'Authorization' : "Bearer " + sessionStorage.getItem('token') 
    }
    return config
})