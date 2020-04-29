# react-integration
Install Bunting on a React SPA (Uses NextJS)

Live here: https://react-integration.bunting.now.sh

To test locally

- clone this repo
- `npm install`
- `npm run dev`
- open `localhost:3000`

To install Bunting

- Go to your Bunting account (Go here if you don't already have an account: https://bunting.com/register-jd83ks)
- Go to `Installation > Tracking Code > "I'll do it myself" >` Copy the Main Tracking Code
- Open `pages/_app.js` and paste in `<script src='YOURSUBDOMAIN.1.bunting.com/call.js?wmID=YOUR_WMID_ID'></script>`
-- Your subdomain is found in the address bar e.g *bentest*.1.bunting.com.
-- Your WMID (website monitor id) is found at the end of the url in the address bar e.g `website_monitor_id=1`. Use the integer only.
- Create some test content with the Bunting Visual Editor
