import { Rating, Button } from "@mui/material"
import useStore from "./utils/store";
const InfoBar = () => {
    const { getRandomVideo } = useStore();
    return <>
        <Button onClick={getRandomVideo}>Random</Button>
        <Rating name="no-value" value={null} />
        <Button>Back</Button>
        <Button>Next</Button>
    </>;
}

export default InfoBar;