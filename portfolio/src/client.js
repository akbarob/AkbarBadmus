import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const Client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  apiVersion: "2022-11-09",
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(Client);
export const urlFor = (source) => builder.image(source);
