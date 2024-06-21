# SwapTunes 
Description: A command-line interface (CLI) tool that uses Node.js and the various npm libraries to download and convert YouTube videos into MP3 files. The tool allows users to specify the video URL, output file name, and quality settings to customize the conversion process.

# Setup & Dependencies
npm init -y
npm install commander ytdl-core ffmpeg-static fluent-ffmpeg
npm link 

# Output
SwapTunes -u https://www.youtube.com/watch?v=7wtBMwzrJfM -q high -d ./MyTunes

Downloaded and converted: Nightcore- Saints  lyrics
Download completed!

https://www.youtube.com/watch?v=zspqdUmPWV4
SwapTunes -u https://www.youtube.com/watch?v=zspqdUmPWV4 -q high -d ./MyTunes
