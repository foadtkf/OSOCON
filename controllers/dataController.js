const Date = require("../models/dateModel");

const asyncHandler = require("express-async-handler");

const createDate = asyncHandler(async (req, res) => {
  const { date } = req.body;
  const data = req.body;
  console.log(date);

  if (!date) {
    res.status(400).json({ message: "Please enter the date" });
    return;
  }

  const dateCreate = await Date.create({ date: req.body.date });

  if (dateCreate) {
    res.status(201).json(dateCreate);
  } else {
    res.status(400).json({ message: "Error in creating Event Date" });
  }
});

const getDate = asyncHandler(async (req, res) => {
  const allDate = await Date.find({}).sort({ createdAt: -1 }).exec();

  if (allDate) {
    res.status(200).json({ allDate });
  } else {
    res.status(400).json({ message: "Error in fetching Event date" });
  }
});

const deleteDate = asyncHandler(async (req, res) => {
  const list = await Date.findOneAndDelete({ _id: req.params.id });
  if (list) {
    res.status(200).json({ message: "Date is deleted" });
  } else {
    res.status(400).json({ message: "Error in deleting" });
  }
});

module.exports = {
  createDate,
  getDate,
  deleteDate,
};
