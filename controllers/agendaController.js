const Agenda = require("../models/agendaModel");

const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");

const createAgenda = asyncHandler(async (req, res) => {
  const { title, hallno, speaker, info, detail, date } = req.body;
  const data = mongoose.Types.ObjectId();
  if (!title || !hallno || !speaker || !info || !detail || !date) {
    res.status(400).json({ message: "Please fill the form carefully" });

    return;
  }
  console.log(req.body);
  const agenda = await Agenda.create({
    title,
    hallno,
    speaker,
    info,
    detail,
    date,
  });

  if (agenda) {
    const eventsData = await agenda.save();
    res.status(201).json(eventsData);
  } else {
    res.status(400).json({ message: "Error in creating agenda" });
  }
});

const getAgenda = asyncHandler(async (req, res) => {
  const list = await Agenda.find({})
    .sort({ createdAt: -1 })
    .populate("date")
    .exec();

  if (list) {
    res.status(200).json({ list });
  } else {
    res.status(400).json({ message: "Unable to fetch the data" });
  }
});

const deleteAgenda = asyncHandler(async (req, res) => {
  const list = await Agenda.findOneAndDelete({ _id: req.params.id });
  if (list) {
    res.status(200).json({ message: "Agenda is deleted" });
  } else {
    res.status(400).json({ message: "Error in deleteing" });
  }
});

module.exports = {
  createAgenda,
  getAgenda,
  deleteAgenda,
};
