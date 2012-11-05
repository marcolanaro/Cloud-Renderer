# Cloud Rendering - Canvas Streaming 

The idea is to render 2D/3D canvas in the cloud. Pushing through the server to the client, be able to stream the canvas as a video. In this way you could use clients of all types: even IPad, IPhone, TV would be compatible.

## Rendering

It is currently used the [node-canvas](https://github.com/LearnBoost/node-canvas) library to render 2D graphics using [Cairo](http://www.cairographics.org/).

### Dependences
	apt-get install python-dev
	apt-get install gcc
	apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev
	npm install -g node-gyp

## Stream

A socket server sends an entire image to the browser every second. See [Socket.IO](http://socket.io/).

## ToDo

Integrate [FFMpeg](http://ffmpeg.org/) to stream a real video and optimize bandwidth and latency.


