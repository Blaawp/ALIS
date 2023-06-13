import { findUser } from "@/utils/db";
import { ZodError, z } from "zod";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const inputSchema = z.number().min(0);
            const parsed = inputSchema.parse(parseInt(req.query[":id"]));
            const user = await findUser({ id: parsed, limit: 1 });
            res.status(200).json(user);
            return;
        } catch (e) {
            if (e instanceof ZodError) {
                res.status(400).end();
                return;
            }

            res.status(500).end();
            return;
        }
    }

    res.status(404).end();
}
