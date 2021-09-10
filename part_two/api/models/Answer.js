const mongoose = require("mongoose");

const { Schema } = mongoose;

const AnswerSchema = new Schema({
  surveyId: { type: String, required: true },
  answers: [
    {
      questionId: {
        type: String,
        required: true,
      },
      answer: {
        type: Schema.Types.Mixed,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Answer", AnswerSchema);
