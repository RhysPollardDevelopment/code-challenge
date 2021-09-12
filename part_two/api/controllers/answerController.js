const Answer = require("../models/Answer");
const Survey = require("../models/Survey");

const postAnswers = async (posted) => {
  const survey = await Survey.findById(posted.surveyId).exec();

  if (survey === null || survey instanceof Error) {
    throw new Error("400");
  }

  if (survey.questions.length != posted.answers.length) {
    throw new Error(
      "The number of answers supplied does not match the number of questions in this survey."
    );
  }

  if (
    !survey.questions.every((question) =>
      posted.answers.some((answer) => question.id === answer.questionId)
    )
  ) {
    throw new Error("One of your answers does not have a matching question Id");
  }

  if (
    !survey.questions.every((question) =>
      posted.answers.some((value) => question.type == typeof value.answer)
    )
  ) {
    throw new Error("Your answer does not match the correct value type.");
  }

  const newAnswers = new Answer({ ...posted });
  const dbEntry = await newAnswers.save();
  return dbEntry;
};

const getSurveyAnswers = async (answeredSurvey) => {
  try {
    const surveyAnswers = await Answer.find({
      surveyId: answeredSurvey,
    }).exec();

    if (surveyAnswers === null || surveyAnswers instanceof Error) {
      throw new Error("400");
    }

    return surveyAnswers;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { postAnswers, getSurveyAnswers };
