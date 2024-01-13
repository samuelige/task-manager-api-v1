import {Express} from 'express';
import connectDB from "./connect";

const port = process.env.PORT as string || 5000;
const mongo_url = process.env.MONGO_URI as string;

const start = async (app:Express) => {
    try {
      await connectDB(mongo_url);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
};
  
export default start;