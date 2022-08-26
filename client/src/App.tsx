import {Grid} from "@mui/material";
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
            <VideoList title='Played Videos' videos={playedVideos} />
        </Grid>
        <Grid xs={4} item>
          <VideoList title='Videos' videos={videos} search/>
        </Grid>
      </Grid>
    );
};

export default App;
