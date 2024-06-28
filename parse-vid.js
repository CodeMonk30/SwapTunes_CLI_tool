const ytdl = require('ytdl-core');

async function parseVid(url) {
  if (!ytdl.validateURL(url)) {
    throw new Error('Invalid YouTube URL');
  }
  const info = await ytdl.getInfo(url);
  return info;
}

module.exports = parseVid;
