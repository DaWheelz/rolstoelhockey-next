const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
    const links = [
        { url: "/overview", changefreq: "daily", priority: 0.3 },
        { url: "/clubs", changefreq: "daily", priority: 0.3 },
        { url: "/competition", changefreq: "daily", priority: 0.3 },
        { url: "/contact", changefreq: "daily", priority: 0.3 },
        { url: "/index", changefreq: "daily", priority: 0.3 },
        { url: "/matchbyteam", changefreq: "daily", priority: 0.3 },
        { url: "/match", changefreq: "daily", priority: 0.3 },
        { url: "/policy", changefreq: "daily", priority: 0.3 },
    ]

    const stream = new SitemapStream({ hostname: `https://${req.headers.host}`});

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
}