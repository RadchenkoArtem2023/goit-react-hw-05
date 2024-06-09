import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2U2MzQ1ODY2MzBiNTQzNzg0OTM2Nzg1ZmVjOWNmNyIsInN1YiI6IjY2NjU0N2FjZjQ5YWNmY2Q0NzljZjg1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y0qHnqke1V3JXKRbk7SKqjYAXS_hJtySbFSIPOQ3d_E";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const DEFAULT_IMAGE =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export { axiosInstance, IMAGE_BASE_URL, DEFAULT_IMAGE };
