//call-back fuction
//we dont want error notification with informations to all people
//if we are in development mode the stack (error) shows everything
// if we are in production mode (change mode in ENV file and refresh server (CTRL + C, npm run dev))
    //we will get stack error: null

const errorMiddleware = (err, req, res, next) => {
    console.error('Error:', err.message);
    console.error(err.stack);

    console.log('here is an error middleware');
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null })
}

module.exports = errorMiddleware
