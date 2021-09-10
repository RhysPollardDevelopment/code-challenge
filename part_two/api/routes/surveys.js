const express = require("express");
const {
  postNewSurvey,
  retrieveAllSurveys,
} = require("../controllers/surveyController");
const User = require("../models/User");

const router = express.Router();

router.post("/new_survey", async (req, res) => {
  try {
    const dummyUser = { first_name: "John", last_name: "Smith" }; // Passed in by request object but for demonstration purposes it has been hard coded
    // const postedSurvey = {
    //   title: "Test",
    //   questions: [
    //     { question_text: "Question 2", type: "Boolean" },
    //     { question_text: "Question 1", type: "Number" },
    //   ],
    // };
    const newSurvey = await postNewSurvey(req.body);
    return res.status(200).send(newSurvey);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get("/all", async (_, res) => {
  try {
    const allUsers = await retrieveAllSurveys();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
