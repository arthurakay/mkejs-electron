#Demo for [MKEJS Presentation](http://www.meetup.com/milwaukeejs/events/226653790/) on Electron

## Install `electron-prebuilt`

    npm install -g electron-prebuilt
    
## Clone this repo

Clone the repo locally, then enter the folder in your terminal.

## Run the demo

Run:

    electron .
    
Electron should now load the demo app!

## Run the alternate app

There is an alternate app you can run, which demonstrates more advanced concepts.

Run:

    npm install
    
...which will install `express` locally as a dependency.

Then edit `package.json` to use `main-alt.js` as the "main" process.

Finally, run:

    electron .
    
...where you'll see a page loaded from the `express` server, not just a raw file.