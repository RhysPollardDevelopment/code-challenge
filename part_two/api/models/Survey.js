const mongoose = require("mongoose");

const { Schema } = mongoose;

const SurveySchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 50,
    },
    questions: [
      {
        question_text: {
          type: String,
          maxlength: 100,
        },
        type: {
          type: String,
          enum: ["number", "string", "boolean"],
          default: "String",
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = mongoose.model("Survey", SurveySchema);
