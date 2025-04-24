import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    try {
        const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        res.send(ip);
    } catch (error) {
        res.status(500).send('Error retrieving IP address');
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});