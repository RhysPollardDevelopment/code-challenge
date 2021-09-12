const express = require("express");
const {
  postNewSurvey,
  retrieveAllSurveys,
  retrieveSingleSurvey,
} = require("../controllers/surveyController");
const Survey = require("../models/Survey");
const User = require("../models/User");

const router = express.Router();

router.post("/completed_survey", async (req, res) => {
  try {
    const newSurvey = await postNewSurvey(req.body);
    return res.status(200).send(newSurvey);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get("/all_answers/:surveyId", async (_, res) => {
  try {
    const allSurveys = await retrieveAllSurveys();
    return res.status(200).send(allSurveys);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get("/all_answers/:surveyId", async (req, res) => {
  try {
    console.log(req.params.surveyId);
    const oneSurvey = await retrieveSingleSurvey(req.params.surveyId);
    return res.status(200).send(oneSurvey);
  } catch (err) {
    console.log("error here?");
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
