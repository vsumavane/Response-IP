import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    try {
        const forwarded = req.headers["x-forwarded-for"];
        const ip =
            typeof forwarded === "string"
        ? forwarded.split(",")[0]
        : req.socket.remoteAddress || req.ip;
        res.send({
            ReqIp: req.ip,
            headerIp: ip
            });
    } catch (error) {
        res.status(500).send('Error retrieving IP address');
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});