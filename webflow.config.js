export default {
  webflowUrl: `https://portfolio-starter-template.webflow.io`,
  apiUrl: import.meta.env.MODE === `production` ?
    `https://webflow-dev.vercel.app` : // Production URL
    `http://localhost:3000`, // Development URL
}