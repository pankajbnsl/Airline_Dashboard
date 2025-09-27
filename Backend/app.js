const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const dashboardRoutes = require('./routes/dashboardRoutes');
const reportRoutes = require('./routes/reportRoutes');
const crewRoutes = require('./routes/crewRoutes');

app.use(express.json());

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/crew', crewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
