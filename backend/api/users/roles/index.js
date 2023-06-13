import { findUserRole } from "@/utils/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const categories = await findUserRole({});
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
