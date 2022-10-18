import { CardMedia } from "@mui/material";
import { useRef } from "react";
import InfoBar from "./InfoBar";
import useStore from "../utils/store";
const VideoPlayer = () => {
    const {singleVideo, randomVideo} = useStore();
    const videoRef = useRef(null);
    return (
        <>
          <CardMedia ref={videoRef}  component='video' src={singleVideo?.path || randomVideo?.path} controls autoPlay muted/>
          <InfoBar title={singleVideo?.path || randomVideo?.path} button/>
        </>
    );
};

export default VideoPlayer;
