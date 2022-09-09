import {Grid, List} from "@mui/material";
import useStore from "./utils/store";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import "./App.css";
import { useEffect } from "react";

const App = () => {
    const {videos, playedVideos, getVideos, getRandomVideo} = useStore();
    // TODO add service worker.
    useEffect(() => {
      getVideos();
    }, [getVideos]);

    useEffect(() => {
      getRandomVideo();
    }, [getRandomVideo])
    
    return (
      <Grid container>
        <Grid xs={8} item>
           <VideoPlayer />
           <List sx={{borderBottom: '2px solid #383879', maxHeight: '400px'}}>
                <VideoList title='Played Videos'
                           maxHeight='330px'  
                           videos={playedVideos} 
                           search={playedVideos.length > 5}
                           button
                           />
           </List>
        </Grid>
        <Grid xs={4} item>
          <List sx={{border: '2px solid #383879'}}>
              <VideoList title='Videos' 
                         maxHeight='820px'
                         videos={videos} 
                         search
                         />
          </List>
        </Grid>
      </Grid>
    );
};

export default App;
