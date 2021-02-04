const express = require("express");
const app = express();
const cors = require("cors");
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");

app.use(cors());
//
//************************************************************/
//                                                           */
//     ROUTE                                                 */
//                                                           */
//************************************************************/
//
app.use(comicsRoutes);
//
app.use(charactersRoutes);
//
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, server is UP !!" });
});
app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
