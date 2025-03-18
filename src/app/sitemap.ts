import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const url =
		process.env.NODE_ENV === "production"
			? process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
			: "http://localhost:3000";
	return [
		{
			url,
			lastModified: new Date(),
			priority: 1,
			changeFrequency: "yearly",
		},
	];
}
