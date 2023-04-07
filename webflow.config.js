export default {
  webflowUrl: `https://sl4.webflow.io`,
  apiUrl: import.meta.env.MODE === `production` ?
    `https://webflow-dev.vercel.app` : // Production URL
    `http://localhost:3000`, // Development URL
}