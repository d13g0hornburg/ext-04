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
const TELEGRAM_BOT_LINK = 'https://web.telegram.org/a/#8001707439';
const upload = multer({ storage });

app.post('/chatbot', (req, res) => {
  console.log('Mensagem recebida:', req.body.message);
  const { message } = req.body;

  let botResponse = '';

  if (message.toLowerCase().includes('olá')) {
    botResponse = 'Olá! Como posso ajudar você hoje?';
  } else if (message.toLowerCase().includes('achar um item específico')) {
    // Resposta com link clicável
    botResponse = 'Para isso, entre em contato com a gente no Telegram: <a href="https://web.telegram.org/a/#8001707439" target="_blank">Clique aqui para acessar</a>';
  } else {
    botResponse = 'Desculpe, não entendi. Poderia reformular?';
  }

  res.json({ message: botResponse });
});



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
  console.log(`Server is running on port ${PORT}`);
});