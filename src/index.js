import dotenv from 'dotenv';
import express from 'express';


dotenv.config();

const app = express();

const port = process.env.PORT || 1500;


app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

/**
 * add models to using the CLI
 * run migration(check db)
 * try to add new column, problem? screenshots all the way
 * follow the steps
 **/
