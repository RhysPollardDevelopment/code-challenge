const Survey = require("../models/Survey");

const postNewSurvey = async (survey) => {
  try {
    const newSurvey = new Survey({ ...survey });
    const dbEntry = await newSurvey.save();
    return dbEntry;
  } catch (err) {
    throw new Error(err);
  }
};

const retrieveAllSurveys = async () => {
  try {
    const allSurveys = await Survey.find({});
    return allSurveys;
  } catch (err) {
    throw new Error(err);
  }
};

const retrieveSingleSurvey = async (surveyId) => {
  try {
    const oneSurvey = await Survey.findById(surveyId).exec();
    return oneSurvey;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { postNewSurvey, retrieveAllSurveys, retrieveSingleSurvey };
