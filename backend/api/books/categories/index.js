import { findBookCategory } from "../../../utils/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const categories = await findBookCategory({});
            res.status(200).json(categories);
            return;
        } catch (e) {
            console.error(e);
            res.status(500).json({ msg: e.message });
            return;
        }
    }

    res.status(404).json({ msg: "Not Found" });
}
