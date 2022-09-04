import { Rating, Button, Typography } from "@mui/material"
import useStore from "./utils/store";
import { useState } from "react";

interface Props {
  title: string | undefined;
}

const InfoBar = ({title}: Props) => {
    const { getRandomVideo } = useStore();
    const [value, setValue] = useState<number | null>();

    return <div style={{border: '2px solid red'}}>
                  <Typography variant='h4' sx={{color: '#fff', textAlign: 'center'}}>{title?.split("/Video/")[1]}</Typography>
        <Button onClick={getRandomVideo}>Random</Button>
        
        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        <Button>Back</Button>
        <Button>Next</Button>
    </div>;
}

export default InfoBar;