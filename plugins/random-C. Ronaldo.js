import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const cristiano = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json`)).data;
  const ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())];
  conn.sendFile(m.chat, ronaldo, 'error.jpg', `*سييييييييي*`, m);
};
// conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7'];
handler.tags = ['internet'];
handler.command = /^(رونالدو|cr7)$/i;
handler.limit = 1;
export default handler;
