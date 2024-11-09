const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

const storage = multer.memoryStorage(); // Armazena a imagem na memória temporariamente

const upload = multer({ storage });

app.post('/upload', upload.single('imagem_objeto'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const uniqueName = `${uuidv4()}.jpg`;
  const filePath = path.join(__dirname, 'src/uploads', uniqueName);

  try {
    await sharp(req.file.buffer)
      .resize({ width: 800, height: 600, fit: 'inside' }) // Redimensiona a imagem para caber dentro de 800x600
      .toFile(filePath);

    res.json({ filePath: `/uploads/${uniqueName}` });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('Error processing image.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
