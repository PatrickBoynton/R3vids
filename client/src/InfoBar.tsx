import { Rating, Button, Checkbox, Typography } from "@mui/material"
import useStore from "./utils/store";
import { useEffect, useState } from "react";

interface Props {
  title: string | undefined;
}

const InfoBar = ({title}: Props) => {
    const { getRandomVideo, updateAddress } = useStore();
    const [value, setValue] = useState<number | null>();
    const [checked, setChecked] = useState(false);

    return <div style={{border: '2px solid red'}}>
                  <Typography variant='h4' sx={{color: '#fff', textAlign: 'center'}}>{title?.split("/Video/")[1]}</Typography>
        <Button onClick={getRandomVideo}>Random</Button>
        
        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        <Button>Back</Button>
        <Button>Next</Button>
        <Button disabled={checked} onClick={() => updateAddress()}>Update Address</Button>
    </div>;
}

export default InfoBar;