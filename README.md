# Streams

Streaming app created for learning purposes. [React + Redux].

## Installation

### Requirements:

- [NodeJS](https://nodejs.org/en/download/)

- json-server

```bash
npm install -g json-server
```

- rtmpserver (Node-Media-Server)

```bash
npm install --save node-media-server
```

- [OBS Studio](https://obsproject.com/)

### Processes:

After installing the requirements, make sure to run all three processes: json-server, rtmmpserver and the app itself.

### Issues:

There may be an issue with OBS in Windows where a black screen will display instead of the current display monitor selected. To solve this:

1. Open Settings and search for "Graphics Settings".

2. Select "Classic App" and browse to C:\Program Files\obs-studio\bin\64bit\obs64.exe (or wherever you have installed OBS).

3. Click "Options" [(example screenshot)](https://obsproject.com/images/nvidia-control-panel.png).

4. If you want to use display capture to capture your screen / desktop, select "Power Saving".
   If you want to use game capture to capture a game or use the NVENC encoder, select "High Performance".
