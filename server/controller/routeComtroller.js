import user from "../model/dbModel.js";
const homeRoute = async (req, res) => {
  const userData = req.body;
  const { email } = req.body;
  const validateUser = new user(userData);
  try {
    const user1 = await user.findOne({ email });
    if (user1) {
      return res.status(400).json({ message: "user already exist" });
    }
    await validateUser.save();
    res
      .status(201)
      .json({
        message: "registered successfully",
        success: true,
        validateUser,
      });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user2 = await user.findOne({ email });
    if (!user2) {
      return res.status(400).json({ message: "user doesn't registered" });
    } else {
      if (password === user2.password) {
        res.status(201).json({ message: "login successfull", user2 });
      } else {
        res.status(400).json({ message: "password didn't match" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { homeRoute, login };
