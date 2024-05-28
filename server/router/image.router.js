import express from 'express';

const imageRouter = express.Router();
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

imageRouter.get('/:name', async (req, res) => {
    console.log("ok here we go!");
    try {
        const name = req.params.name;

        console.log(path.join(__dirname, `images/${name}`));
        const imagePath = path.join(__dirname, 'images', name);

        res.sendFile(imagePath, (err) => {
            if (err) {
                res.status(404).send('Image not found');
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal server error');
    }
});

export { imageRouter };

