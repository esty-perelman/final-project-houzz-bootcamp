import "dotenv/config";
import { expressjwt } from "express-jwt";

function authorize(roles) {
  if (typeof roles === "string") roles = [roles];
  const secret = process.env.SECRET;
  return [
    (req, res, next) => {
      if (!roles) next();
      expressjwt({
        secret,
        algorithms: ["HS256"],
      });
    },
    (req, res, next) => {
      if (!roles) next();
      else {
      req.user = req.auth;
      if (!roles.includes(req.user.role))
        return res.status(401).json({ message: "Unauthorized" });
      next();
      }
    },
  ];
}

export { authorize };
