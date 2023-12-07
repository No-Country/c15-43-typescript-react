import express, { Request, Response } from "express";

const app: express.Application = express();
const PORT = process.env.PORT || 3800;

app.get("/", (req: Request, res: Response) => {
    res.send(" Server-UP ");
});

app.listen(PORT, () => {
    console.log(`Server is UP at http://localhost:${PORT}`);
});
