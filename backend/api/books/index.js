import { findBook } from "../../utils/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const books = await findBook({});
            res.status(200).json(books);
            return;
        } catch (e) {
            console.error(e);
            res.status(500).json({ msg: e.message });
            return;
        }
    }

    res.status(404).json({ msg: "Not Found" });
}
