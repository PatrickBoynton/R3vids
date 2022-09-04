import { Request, Response, Router } from "express";
import { Op } from  "sequelize";
import IVideo from "../models/IVideo";
import Video from "../models/video";
import displayPath from "../utils/displayPath";

const router = Router();

router.get("/update", async (req: Request, res: Response) => {
    const allDifferent = await Video.findAll({where: {
        path: {
            [Op.notLike]: `%${displayPath}%`
        }
    }});

        await allDifferent.map((x: IVideo) => Video.update({
            path: displayPath + x.path.split("/Video/")[1]
        }, {
            where: {
                path: {
                    [Op.notLike]: `%${displayPath}%`
                }
            }
        }));
        
        res.send("Check the database.");
    }

    
);

export default router;
