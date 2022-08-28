import {
  Input,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import useStore from "./utils/store";
import { useState } from "react";
import "./VideoList.css";


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
           {(videos || playedVideos).filter((video: string) => video.toLowerCase().includes(value)).map((video: string, index: number) =>
          <>
            <ListItemButton key={index} component="a" href="#">        
              <ListItemText primary={video} onClick={(e: any) => getSingleVideo(e.target.innerHTML, index)}/> 
            </ListItemButton>
        </>
       )}
      </>
    );
};

export default VideoList;
