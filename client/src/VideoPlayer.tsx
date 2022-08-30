import { CardMedia, Typography } from "@mui/material";
import InfoBar from "./InfoBar";
import useStore from "./utils/store";
const VideoPlayer = () => {
    const {singleVideo, randomVideo} = useStore();
    return (
        <>
          <CardMedia component='video' src={singleVideo?.path || randomVideo?.path}  controls autoPlay muted/>
          <Typography variant='h4' sx={{color: 'blue'}}>{(singleVideo?.path || randomVideo?.path)}</Typography>
          <InfoBar />
        </>
    );
};

export default VideoPlayer;
