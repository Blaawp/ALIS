import NotEnoughBooks from "@/errors/NotEnoughBooks";
import { returnBook } from "@/utils/db";
import { ZodError, z } from "zod";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const InputSchema = z.object({
                borrowTransactionId: z.number().min(1),
                librarianId: z.number().min(1)
            });
            const parsed = InputSchema.parse(JSON.parse(req.body));
            const newRecord = await returnBook(parsed);
            res.status(200).json(newRecord);
            return;
        } catch (e) {
            console.error(e);

            if (
                e instanceof ZodError ||
                e instanceof SyntaxError ||
                e instanceof NotEnoughBooks
            ) {
                res.status(400).end();
                return;
            }

            res.status(500).end();
            return;
        }
    }

    res.status(404).end();
}
