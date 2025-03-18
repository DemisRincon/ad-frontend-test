import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [],
		},
		sitemap: `${process.env.NEXT_PUBLIC_VERCEL_URL}/sitemap.xml`,
	};
}
