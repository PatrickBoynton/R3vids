import axios from "axios";
import create from "zustand";
import {Video} from "../models/video"

interface VideoStore {
    videos: any;
    playedVideos: any;
    randomVideo: Video | undefined;
    singleVideo: Video | undefined;
    pathBase: string;
    rating: number;
    getVideos: () => Promise<void>;
    getRandomVideo: () => Promise<void>;
    getRandomPlayedVideo: () => Promise<void>;
    getSingleVideo: (video: Video, index: number) => void;
}

const { hostname } = window.location;
const pathBase = `http://${hostname}:8000/Video/`;
const useStore = create<VideoStore>((set) => ({
    videos: [],
    playedVideos: [],
    randomVideo: undefined,
    singleVideo: undefined,
    pathBase,
    rating: 0,

    getVideos: async () => {
        const response = await axios.get<string[]>(`${pathBase}list`);
        set(() => ({
            videos: response.data
        }));
    },

    getRandomVideo: async () => {
        const response = await axios.get<Video>(`${pathBase}random`);
        set((state: any) => ({
            randomVideo: response.data,
            playedVideos: [response.data, ...state.playedVideos],
        }));
    },

    getRandomPlayedVideo: async () => {
        set((state: any) => ({
            randomVideo: state.playedVideos[Math.round(Math.random() * state.playedVideos.length)],
        }));
    },

    getSingleVideo: (video: Video) => {
        set((state: any) => ({
            singleVideo: video,
            playedVideos: [video, ...state.playedVideos],
        }));
    },
}));

export default useStore;