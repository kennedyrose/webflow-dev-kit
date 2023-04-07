# Webflow Dev Kit

This is a collection of tools to help you build complex functionality into Webflow. Including but not limited to:

- Serverless API functions
- Client-side JavaScript
- React
- Svelte
- Vue
- ... and pretty much anything else you can do with Astro

Webflow Dev Kit also gives you a local development environment that proxies your Webflow site and lets you build and test your API and JS with live reloading and all the local development features you're used to.

Your API and JS can be deployed to Netlify, Vercel, or anywhere else that supports Astro projects and embedded into your Webflow site.

## Development

To get started, clone this repo and run `npm install` to install the dependencies.

Then run `npm run dev` to start the local development server. This will proxy your Webflow site and serve your API and JS locally.

## Configuration

The `webflow.config.js` file contains configuration for both the local development server and the production server. Make sure to set your Webflow URL as well as the URL you will be deploying the app to.

## Deployment

By default, Webflow Dev Kit is set up to deploy to Vercel. However, you could also deploy to Netlify or any other service that supports Astro projects. Just make sure to [change Astro's adapter](https://astro.build/integrations?search=&categories%5B%5D=adapters) to match your deployment target.

## Integrating With Your Webflow Site

To add your JS file to your Webflow site, add a script tag to your site with the `src` attribute set to the URL of your JS file, and a `data-webflow-prod` data attribute. For example:

```html
<script src="https://YOUR-SITE-URL.vercel.app/script.js" data-webflow-prod></script>
```

The `data-webflow-prod` attribute ensures that the script tag is replaced with the development version of your script when you are running your site in the local development environment.

## Further Reading
- [Astro Documentation](https://docs.astro.build/)
- [Vercel Documentation](https://vercel.com/docs)