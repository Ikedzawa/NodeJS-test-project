import { Router } from "express";
import { downloadFile, getData, addData, removeData } from './controllers.js';

const router = Router();

router.get('/get-data', getData);
router.get('/download-file', downloadFile);

router.post('/add-data', addData);
router.post('/remove-data', removeData);

export default router;
