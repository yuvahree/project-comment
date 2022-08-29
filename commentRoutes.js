const express = require("express");
const router = express.Router();
const {
  getcomment,
  setcomment,
  updatecomment,
  deletecomment,
} = require("../controllers/commentController");

router.route("/").get(getcomment).post(setcomment);
router.route("/:id").delete(deletecomment).put(updatecomment);

/*router.get("/", getGoals);

router.post("/", setGoal);
router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);*/

module.exports = router;
