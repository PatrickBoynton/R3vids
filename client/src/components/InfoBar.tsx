import {Rating, Button, Typography, Select, MenuItem, Checkbox, FormControlLabel, FormGroup} from "@mui/material"
import useStore from "../utils/store";
import { useEffect, useState } from "react";

interface Props {
  title: string | undefined;
  button: boolean;
}

const InfoBar = ({title, button}: Props) => {
    const { getRandomVideo, getRandomPlayedVideo, getTypes, types, setRating, getRatings, rating} = useStore();
    const [value, setValue] = useState<number | null>();
    
    useEffect(() => {
      getTypes()
    }, [getTypes])


    useEffect(() => {
        getRatings()
    }, [getRatings])

    return <div style={{border: '2px solid #383879', textAlign: 'center', padding: '10px'}}>
        <Typography variant='h4' sx={{color: '#fff', textAlign: 'center'}}>{title?.split("/Video/")[1]}</Typography>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Exclude" />
            <FormControlLabel control={<Checkbox />} label="Include" />
        </FormGroup>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={types.map((x: any) => x.id)}
    label="Type"
    // onChange={handleChange}
  >
    {types.map((x: any) => <MenuItem value={10}>{x.type}</MenuItem>)}
  </Select>
        <Button onClick={getRandomVideo}>Random</Button>
        {button ? <Button onClick={() => getRandomPlayedVideo()}>Random Played Video</Button> : null}

        <Rating 
        name="controlled-rating" 
        value={rating}
        onChange={(event, newValue) => {
          // if(newValue! >= 0) {
          //   setRating(newValue);
          // setValue(newValue);
          // } else {
          //   setRating(0);
          //   setValue(0)
          // }
        }}
      />
    </div>;
}

export default InfoBar;