const model = require("../models/model");

// get categories

// post:http://localhost:8000/api/categories
const createCategories = (req, res) => {
  const Create = new model.Categories({
    type: "Expense",
    color: "#1F3B5C", //dark
  });
  Create.save(function (err) {
    if (err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error whie creating categories ${err}` });
  });
};
// get:http://localhost:8000/api/categories
const getCategories = async (req, res) => {
  try {
    const data = await model.Categories.find({});

    // Extract only `type` and `color`
    const filter = data.map((v) => ({
      type: v.type,
      color: v.color,
    }));

    return res.status(200).json(filter); // return filtered data, not full data
  } catch (error) {
    console.error("Error fetching categories:", error);
    return res.status(500).json({ error: error.message });
  }
};


// post:http://localhost:8000/api/transaction
const createTransaction = async (req, res) => {
  try {
    const { name, type, amount } = req.body;

    if (!name || !type || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const create = await new model.Transaction({
      name,
      type,
      amount,
      date: new Date(),
    });

    await create.save();

    console.log("Transaction created");
    return res.status(201).json({ message: "Transaction created", data: create });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get:http://localhost:8000/api/transaction
const getTransaction = async (req, res) => {
  let data = await model.Transaction.find({});
  return res.json(data);
};

// get:http://localhost:8000/api/transaction
const deleteTransaction = async (req, res) => {
  if (!req.body) res.status(400).json({ message: "Request body not Found" });
  await model.Transaction.deleteOne(req.body, function (err) {
    if (!err) res.json("Record Deleted...!");
  })
    .clone()
    .catch(function (err) {
      res.json({ message: "Error while deleting transaction Record" });
    });
};

// get:http://localhost:8000/api/transaction
const getLabels = async (req, res) => {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "CategoriesInfo",
      },
    },
    {
      $unwind: "$categoriesInfo",
    },
  ])
    .then((result) => {
      const data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categoriesInfo["color"],
          }
        )
      );
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json("Lookup Collections Error");
    });
};

module.exports = {
  createCategories,
  getCategories,
  createTransaction,
  getTransaction,
  deleteTransaction,
  getLabels,
};
