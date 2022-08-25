const Log = require("../models/Log");

const handlingRequestLog = async (request, response, next) => {
  request.start = Date.now();
  const oldSend = response.json;

  response.json = (data) => {
    const error = data?.errorStack;
    response.json = oldSend;

    Log.create({
      stackError: error || "",
      host: request.hostname || "",
      path: request.path || "",
      params: JSON.stringify(request.query) || "",
      method: request.method || "",
      status: response.statusCode || "",
      bffVersion: "",
      appVersion: "",
      ip: request?.ip || "",
      fieldName: request?.fieldName || "",
      plataform: "",
      requestBody: data.errorStack ? "" : JSON.stringify(request.body) || "",
      responseBody: data ? JSON.stringify(data) : "",
      responseTime: `${Date.now() - request.start}`,
      sessionId: "",
      userId: request?.user?.id || "",
      enviroment: "prod",
    });

    return response.json(data);
  };

  next();
};

module.exports = { handlingRequestLog };
