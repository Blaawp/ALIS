import { ZodError, z } from "zod";
import jwt from "jsonwebtoken";
import { loginUser } from "../utils/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const InputSchema = z.object({
            email: z.string().email(),
            password: z.string().nonempty()
        });
        try {
            req.body = JSON.parse(req.body);
            const parsed = InputSchema.parse(req.body);
            let user = await loginUser(parsed);
            if (!user) {
                res.status(400).end();
                return;
            }
            const generatedToken = jwt.sign(user, process.env.JWT_SECRET, {
                algorithm: "HS512",
                issuer: "ALIS API",
                expiresIn: "3 days"
            });
            res.status(200).json({ user, token: generatedToken });
            return;
        } catch (e) {
            console.error(e);

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
