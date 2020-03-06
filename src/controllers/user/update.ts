import resUtil from '../../utils/resUtil';
import userModel from '../../models/user';

export default async (req, res, next) => {
  const { email } = req.userInfo;
  const params = req.body;
  try {
    await userModel.findOneAndUpdate({ email }, { $set: params });
    res.send(resUtil(0))
  } catch (e) {
    next(e)
  }
};