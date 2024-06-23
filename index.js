#!/usr/bin/env node

const { Command } = require('commander');
const parseVid = require('./parse-vid');
const convertMp3 = require('./convert-mp3');
const fs = require('fs');
const path = require('path');
const program = new Command();

console.log("Welcome to SwapTunes!!🎶");
program
  .version('1.0.0')
  .description('YouTube to MP3 downloader CLI tool')
  .requiredOption('-u, --url <url>', 'YouTube video URL')
  .option('-q, --quality <quality>', 'Audio quality (high, low, medium)', 'high')
  .option('-d, --directory <directory>', 'Download directory', './')
  .action(async (options) => {
    try {
      if (!fs.existsSync(options.directory)) {
        fs.mkdirSync(options.directory, { recursive: true });
      }
      const videoInfo = await parseVid(options.url);
      await convertMp3(videoInfo, options.quality, options.directory);
      console.log('Download completed!');
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

program.parse(process.argv);
