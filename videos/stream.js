const fs = require('fs')
const mime = require('mime-types')
const express = require('express')
 
getVideo = (req, res, next) => {
    const videoFile = '.' + decodeURI(req.baseUrl)

    fs.stat(videoFile, (err, stats) => {
        if (err) {
            console.log(err);
            return res.status(404).end('<h1>Movie Not found</h1>');
        }

        const { range } = req.headers
        const { size } = stats
        const start = Number((range || '').replace(/bytes=/, '').split('-')[0])
        const end = size - 1
        const chunkSize = (end - start) + 1
        const mimeType = mime.lookup(videoFile)

        res.set({
            'Content-Range': `bytes ${start}-${end}/${size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': mimeType
        })

        res.status(206)

        const stream = fs.createReadStream(videoFile, { start, end })
        stream.on('open', () => stream.pipe(res))
        stream.on('error', (streamErr) => res.end(streamErr))
        
      });
}

module.exports = getVideo