import Type from "../models/Type";

const typesController = async (req, res) => {
    const types = await Type.findAll();

    res.send(types);
}

export default typesController;