const mongoose = require("mongoose");

const agendaSchema = mongoose.Schema(
  {
    date: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Date",
    },
    title: {
      type: String,
      required: true,
    },
    hallno: {
      type: String,
      required: true,
    },
    speaker: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  {
    timesatamps: true,
    required: true,
  }
);

module.exports = mongoose.model("Agenda", agendaSchema);
