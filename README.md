# AMFMFX.COM

AMFMFX.COM is a subscription-based audio distribution service built with the MERN stack that allows for the preview and distribution of sound design, music, and vocal sample audio files for use in the production of commericial radio and sound design.

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

### Introduction

This platform is designed to assist Production and Imaging Directors in the commercial broadcast radio industry with various types of audio files to use in their promos and commercials.

Built with React, MongoDB, Express/Node.js, Nodemailer, Wavesurfer.js, and Material-UI, the platform is designed to be a one-stop shop to enhance the overall sound of a radio station or podcast. Whether you need a music bed to accompany a voice-over for a commercial advertisement, or a cutting-edge sound design effect for a podcast intro, or vocal samples from the biggest artists in the world, the platform is the perfect solution for your needs.

### Installation

from a terminal, run the following command:

```
git clone https://github.com/infiniteoo/amfmfx.com.git
npm install
npm run dev
```

You'll need to create a .env file in the root of the project and add the following line to it:

```
MONGODB_CONNECT_STRING= YOUR MONGODB CONNECT STRING
MAIL_USER= YOUR GMAIL USERNAME
MAIL_PASS= YOUR GMAIL PASSWORD
```

### Usage

Utilizing the MERN stack with Passport to encrypt passwords, the user and register a new account. A confirmation email is sent to them to verify their email address. After verification, the user can sign in and access the dashboard:
![example_gif](/src/assets/example_gif_1.gif)

In the dashboard, the user is allowed five free downloads every 15 days. After five downloads, the user is required to purchase a subscription to continue downloading.

In the dashboard, they can preview audio files, or filter the database by category, and download them:
![example_gif](/src/assets/example_gif_3.gif)

A user with administrator access can also add new audio files to the database:
![example_gif](/src/assets/example_gif_2.gif)

### License

Copyright (c) 2022 AMFMFX.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
