const sendSuccess = (res, data, status = 200) => {
    return res.status(status).json({
      statusCode: status,
      hasResult: true,
      result: data.result,
      nextToken: data.nextToken
    });
  };
  
  const sendError = (res, message, status = 500) => {
    return res.status(status).json({
      statusCode: status,
      hasResult: false,
      message
    });
  };

  
  module.exports = {
    sendSuccess,
    sendError
  };