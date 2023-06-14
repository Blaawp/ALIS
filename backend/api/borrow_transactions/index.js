import moment from "moment";
import NotEnoughBooks from "../../errors/NotEnoughBooks";
import { findBorrowTransaction, addBorrowTransaction } from "../../utils/db";
import { ZodError, z } from "zod";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const InputSchema = z.object({
                userId: z.number().min(1),
                bookBarcode: z.number().min(0)
            });
            const parsed = InputSchema.parse(req.query);
            const transaction = await findBorrowTransaction(parsed);
            res.status(200).json(transaction);
            return;
        } catch (e) {
            console.error(e);
            res.status(500).end();
            return;
        }
    }

    if (req.method === "POST") {
        try {
            const InputSchema = z.object({
                userId: z.number().min(0),
                bookBarcode: z.number().min(0),
                librarianId: z.number().min(0),
                dueDate: z.string().datetime(),
                borrowDate: z.string().datetime()
            });
            const parsed = InputSchema.parse(JSON.parse(req.body));

            if (moment(parsed.borrowDate) >= moment(parsed.dueDate)) {
                return res.status(400).end();
            }

            const newRecord = await addBorrowTransaction(parsed);
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
