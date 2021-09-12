const express = require("express");
const {
  postNewSurvey,
  retrieveAllSurveys,
  retrieveSingleSurvey,
} = require("../controllers/surveyController");
const {
  postAnswers,
  getSurveyAnswers,
} = require("../controllers/answerController");
const Survey = require("../models/Survey");
const User = require("../models/User");

const router = express.Router();

router.post("/new_survey", async (req, res) => {
  try {
    const newSurvey = await postNewSurvey(req.body);
    return res.status(200).send(newSurvey);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get("/all", async (_, res) => {
  try {
    const allSurveys = await retrieveAllSurveys();
    return res.status(200).send(allSurveys);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get("/load/:surveyId", async (req, res) => {
  try {
    const oneSurvey = await retrieveSingleSurvey(req.params.surveyId);
    return res.status(200).send(oneSurvey);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.post("/post_answers", async (req, res) => {
  try {
    const completedSurvey = await postAnswers(req.body);
    return res.status(200).send(completedSurvey);
  } catch (err) {
    if (err.message == "400") {
      return res.status(400).send({ error: err.message });
    }
    return res.status(500).send({ error: err.message });
  }
});

router.get("/all_answers/:surveyId", async (req, res) => {
  try {
    const surveyAnswers = await getSurveyAnswers(req.params.surveyId);
    return res.status(200).send(surveyAnswers);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
