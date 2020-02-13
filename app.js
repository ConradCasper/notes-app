const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Conrad. ')

fs.appendFileSync('notes.txt', 'Hi, nice to meet you, Conrad. My name is CatDog.')