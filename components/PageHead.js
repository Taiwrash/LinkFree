import Head from "next/head";

export default function PageHead(props) {
  const {
    title = "LinkFree - connect to your audience with a single link",
    description = "Showcase the content you create and your projects in one place. Make it easier for people to find, follow and subscribe. Open Source alternative to LinkTree.",
    ogTitle = "LinkFree - connect to your audience with a single link",
    ogUrl = "http://linkfree.eddiehub.io",
    ogImage = "/logo512.png",
    ogType = "image/png",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
}
