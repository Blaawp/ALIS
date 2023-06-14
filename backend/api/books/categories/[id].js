import { z } from "zod";
import { findBookCategory } from "../../../utils/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const inputSchema = z.number().min(1);
            const parsed = inputSchema.parse(parseInt(req.query[":id"]));
            const categories = await findBookCategory({ id: parsed });
            res.status(200).json(categories);
            return;
        } catch (e) {
            console.error(e);
            res.status(500).end();
            return;
        }
    }

    res.status(404).end();
}
