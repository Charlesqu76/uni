import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Params: ${JSON.stringify(req.params)}`);
  console.log(`Request Body: ${JSON.stringify(req.body)}`);
  console.log(`Request Query: ${JSON.stringify(req.query)}`);
  console.log('')
  // const oldSend = res.send;
  // res.send = function (data) {
  //   console.log(`Response Data: ${data}`);
  //   res.send = oldSend; // set function back to avoid the 'double-send'
  //   return res.send(data);
  // };

  next();
}
