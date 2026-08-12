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
    title: `Alex Bar / ${cafeName}`,
    description: `Visit Alex Bar in ${cafeName}`,
  };
}

export default function CafeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-slate-900">{children}</div>;
}