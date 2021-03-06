/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own
const express = require('express');

/* ====== Internal Modules  ====== */
// Required Internal Modules
// all code that is our code
const routes = require("./routes");

/* ====== Instanced Module  ====== */
// Create the Express app
const app = express();
// returns an object that is our server

	
/* ====== Middleware  ====== */ 
//(app.use)
app.use("/", routes.home)

/* ====== System Variables  ====== */
const PORT = 4000; // full caps signify a config variable

/* ====== App Configuration  ====== */
// app.set
app.set('view engine', 'ejs');

/* ====== Routes  ====== */

/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)
app.listen(PORT, function () {
	console.log(`Server is live on port http://localhost:${PORT}`);
});