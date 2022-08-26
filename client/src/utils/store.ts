import axios from "axios";
import create from "zustand";

interface VideoStore {
    videos: any;
    playedVideos: any;
    randomVideo: string;
    singleVideo: string;
    title: string;
    getVideos: () => Promise<void>;
    getRandomVideo: () => Promise<void>;
    getSingleVideo: (video: string, index: number) => void;
}

const { hostname } = window.location;
const pathBase = `http://${hostname}:8000/Video/`;
const useStore = create<VideoStore>((set) => ({
    videos: [],
    playedVideos: [],
    randomVideo: "",
    singleVideo: "",
    title: "Nothing",

    getVideos: async () => {
        const response = await axios.get<string[]>(`${pathBase}list`);

        set(() => ({
            videos: response.data
        }));
    },

    getRandomVideo: async () => {
        const response = await axios.get<string>(`${pathBase}random`);
        set((state: any) => ({
            randomVideo: response.data,
            playedVideos: [response.data, ...state.playedVideos],
            title: state.randomVideo.split("/Video/")[1],
        }));
    },

    getSingleVideo: (video: string, index: number) => {
        set((state: any) => ({
            singleVideo: video,
            playedVideos: [video, ...state.playedVideos],
            title: state.singleVideo.split("/Video/")[1]
        }));
    }
}))

export default useStore;