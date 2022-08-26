import {
  Input,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import useStore from "./utils/store";
import "./VideoList.css";


const VideoList = ({title='', videos = [], playedVideos = [], search = false}) => {
    const {getSingleVideo} = useStore();

    return (
        <>
           <Typography variant='h2'>{title}</Typography> 
           {search ? <Input /> : null}
           {(videos || playedVideos).map((video: string, index: number) =>
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
