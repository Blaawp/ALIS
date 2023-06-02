import { z } from "zod";
import jwt from "jsonwebtoken";
import { addUser } from "@/utils/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const InputSchema = z.object({
            first_name: z.string().nonempty(),
            middle_name: z.string().nonempty(),
            last_name: z.string().nonempty(),
            email: z.string().email(),
            password: z.string().nonempty(),
            role: z.number().int().min(0).max(2),
            avatar_link: z.string().nullable()
        });
        try {
            req.body = JSON.parse(req.body);
            const parsed = InputSchema.parse(req.body);
            let user = await addUser(parsed);
            if (!user) {
                return res.status(400).end();
            }
            const generatedToken = jwt.sign(user, process.env.JWT_SECRET, {
                algorithm: "HS512",
                issuer: "ALIS API",
                expiresIn: "3 days"
            });
            res.status(200).json({ user, token: generatedToken });
            return;
        } catch (e) {
            console.log(e);
            if (e instanceof ZodError || e instanceof SyntaxError) {
                res.status(400).end();
                return;
            }
            res.status(500).end();
            return;
        }
    }

    res.status(404).end();
}
