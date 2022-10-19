const GetAllController = async (req, res, model) => {
  if (!model) throwError("!model")
  try {
    const data = await model.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetByIdController = async (req, res, model) => {
  try {
    console.log(req.params.id)
    const data = await model.findById(req.params.id)
    res.json(data);
  }
  catch (error){
    console.log(error)
  }
};

const AddController = async (req, res, model) => {
  console.log(req.body)
  const data = new model({ ...req.body });
  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const UpdateController = async (req, res, model) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await model.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DeleteController = async (req, res, model) => {
  try {
    const result = await model.find()
  }
  catch (error) {
    res.status(500).json({massage: `delet many ${model.name} dont working` , error })
  }
};

const DeleteByIdController = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.findByIdAndDelete(id);
    res.json(`Document with ${id} id has been deleted..`);
  } catch (error) {
    res.status(500).json({massage: `delet by id ${id} from ${model.name} dont working` , error })
  }
};

export {
  GetAllController,
  GetByIdController,
  AddController,
  UpdateController,
  DeleteController,
  DeleteByIdController,
};
