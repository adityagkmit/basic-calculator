// app.js
const express = require('express');
const dotenv = require('dotenv');
const { connectToDB } = require('./config/database.js');
const calculatorRoutes = require('./routes/operation.route.js');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, './swagger/swagger.yaml'));



dotenv.config();

const app = express();

app.use(express.json());
// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to MongoDB
connectToDB();

// Routes
app.use('/api/calculators', calculatorRoutes);

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});