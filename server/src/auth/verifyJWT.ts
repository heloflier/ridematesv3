// this code has been modified from https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface DecodedToken {
  id: string;
  email: string;
  username: string;
}

const { JWT_SECRET } = process.env as { JWT_SECRET: string };

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {

  console.log('verifyJWT');

  // console.log('****** req.headers: ', req.headers);
  const token = (req.headers['authorization']  as string)?.split(' ')[1];
  console.log('**** token: ', token);

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          isLoggedIn: false,
          message: 'failed to authenticate'
        });
      }
    
      const decodedToken = decoded as DecodedToken;
      console.log('decodedToken: ', decodedToken);
      req.user = {
        id: decodedToken.id,
        email: decodedToken.email,
        username: decodedToken.username
      };

      console.log('yes token, next function ****************************************');
    
      next();
    });
  } else {
    res.json({
      isLoggedIn: false,
      message: 'No token provided'
    });
  }
};
