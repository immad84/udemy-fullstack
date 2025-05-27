const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");


// import x from 'swa'


const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Project API",
      version: "1.0.0",
      description: "API documentation for the project",
      contact: {
        name: "Indivore",
      },
    },
    servers: [
      {
        // url: `${process.env.API_BASE_URL}` || `http://localhost:${process.env.PORT}/api`,
        url: `http://localhost:${process.env.PORT}/api`,
        description: "Dynamic API URL"
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ BearerAuth: [] }],
  },
  apis: ["./routes/*.js"],
};

const setupSwagger = (app) => {
  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;


