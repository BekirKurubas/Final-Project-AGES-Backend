import 'dotenv/config'
import { auth } from "express-oauth2-jwt-bearer";

const checkJwt = auth({
    audience: `${process.env.AUTH0_AUDIENCE}`,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ["RS256"],
});

export default { checkJwt }