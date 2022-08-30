import {
  Input,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import useStore from "./utils/store";
import { useState } from "react";
import "./VideoList.css";
import { Video } from "./models/video";


const VideoList = ({title='', videos = [], playedVideos = [], search = false}) => {
    const {getSingleVideo} = useStore();
    const [value, setValue] = useState("");
    
    const handleChange = (e: any) => {
      setValue(e.target.value);
    }
    
    return (
        <>
           <Typography variant='h2'>{title}</Typography> 
           {search ? <Input onChange={handleChange} /> : null}
           {(videos || playedVideos).filter((video: Video) => video.path.toLowerCase().includes(value)).map((video: Video, index: number) =>
          <>
            <ListItemButton key={video.id} component="a" href="#">        
              <ListItemText primary={video.path} onClick={(e: any) => getSingleVideo(video, video.id)}/> 
            </ListItemButton>
        </>
       )}
      </>
    );
};

export default VideoList;
