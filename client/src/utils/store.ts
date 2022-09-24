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
    vidRef: any;
    types: [];
    getVideos: () => Promise<void>;
    getRandomVideo: () => Promise<void>;
    getRandomPlayedVideo: () => Promise<void>;
    getSingleVideo: (video: Video, index: number) => void;
    getPreviousSingleVideo: (id: number) => void;
    getNextSingleVideo: (id: number) => void;
    getTypes: () => void;
    setRating: (value: number | null) => void;
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
    vidRef: null,
    types: [],

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

    handleVideoPlayback: (vidRef: any) => {
        vidRef.current.play();
    },

    getPreviousSingleVideo: (id: number) => {
        set((state: any) => ({
            randomVideo: state.videos[id-=1]   
        }));
        
    },

    getNextSingleVideo: (id: number) => {
        set((state: any) => ({
            singleVideo: state.videos[id+=1]
        }));
    },

    getTypes: async () => {
        const response = await axios.get(`${pathBase}types`);

        set((state: any) => ({
            types: response.data,
        }));
    },

    setRating: async (value: number | null) => {
        if(value !== null) {
            set((state: any) => ({
            rating: value,
        }));

    } else {
        set((state: any) => ({
            rating: 0
        }))
    }
    await axios.put(`${pathBase}/rating/update`, {
            data: {
                rating: value
            }
        });
    }
}));

export default useStore;