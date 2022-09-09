import {
  Divider,
  Input,
    List,
    ListItemButton,
    ListItemText,
    Typography,
    Button
} from "@mui/material";
import useStore from "./utils/store";
import { useState } from "react";
import "./VideoList.css";
import { Video } from "./models/video";


const VideoList = ({title='', videos = [], playedVideos = [], search = false, maxHeight='', button=false}) => {
    const {getSingleVideo, getRandomPlayedVideo} = useStore();
    const [value, setValue] = useState("");
    
    const handleChange = (e: any) => {
      setValue(e.target.value);
    }
    return (
        <>
           <Typography variant='h2'>{title}</Typography> 
           {search ? <Input onChange={handleChange} sx={{width: '100%'}} placeholder='Search...' /> : null}
           <List sx={{maxHeight, overflow: 'auto', margin: '10px'}}>
           {(videos || playedVideos).filter((video: Video) => video.path.toLowerCase().includes(value)).map((video: Video, index: number) =>
          <>
            <ListItemButton key={video.id}>        
              <ListItemText primary={video.path.split("/Video/")[1]} onClick={(e: any) => getSingleVideo(video, video.id)}/> 
            </ListItemButton>
            <Divider />
        </>
       )}
       </List>
       {button ? <Button onClick={() => getRandomPlayedVideo()}>Random Played Video</Button> : null}
      </>
    );
};

export default VideoList;
