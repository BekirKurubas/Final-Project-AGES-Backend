import { Router } from 'express';

const router = Router();

router.get('/images', (req, res) => {
  const images = {
    lv1Urls: [
      "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-1.1_page-0001.jpg",
      "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-1.2_page-0001.jpg",
    ],
    lv2Urls: [
      "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-2.1_page-0001.jpg",
      "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-2.2_page-0001.jpg",
    ],
    lv3Urls: [
      "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-3.1_page-0001.jpg",
      "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-3.2_page-0001.jpg",
    ],
    sb1Urls: [
      "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Sprachbausteine-1_page-0001.jpg",
    ],
    sb2Urls: [
      "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Sprachbausteine-2_page-0001.jpg",
    ]
  };

  res.json(images);
});

export { router as pagesPhotosRouter };
