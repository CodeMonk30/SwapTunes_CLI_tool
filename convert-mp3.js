const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');

ffmpeg.setFfmpegPath(ffmpegPath);

async function convertMp3(info, quality, directory) {
  const title = info.videoDetails.title.replace(/[\/:*?"<>|]/g, ''); // Remove invalid characters for file names
  const filePath = path.join(directory, `${title}.mp3`);

  const stream = ytdl.downloadFromInfo(info, {
    filter: 'audioonly',
    quality: quality === 'high' ? 'highestaudio' : (quality === 'low' ? 'lowestaudio' : 'highestaudio'),
  });

  return new Promise((resolve, reject) => {
    ffmpeg(stream)
      .audioBitrate(quality === 'high' ? 320 : (quality === 'low' ? 128 : 192))
      .format('mp3')
      .on('end', () => {
        console.log(`Downloaded and converted: ${title}`);
        resolve();
      })
      .on('error', (err) => {
        console.error('Error:', err.message);
        reject(err);
      })
      .save(filePath);
  });
}

module.exports = convertMp3;
