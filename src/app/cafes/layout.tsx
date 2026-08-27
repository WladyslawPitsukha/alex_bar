import type { Metadata } from "next";
import { getNameFromSlug } from "@/utils/getNameSlug";

export type Props = {
  params: Promise<{ slug?: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cafeName = slug ? getNameFromSlug(slug) : "Cafes";

  return {
    title: `${cafeName} | Alex Bar`,
    description: slug
      ? `Discover ${cafeName} and visit Alex Bar in Poland.`
      : "Discover Alex Bar cafes across Poland.",
  };
}

export default function CafeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-slate-900">{children}</div>;
}