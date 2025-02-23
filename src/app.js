import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({"message": "Qué haces aquí hijo 🤨?"});
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});