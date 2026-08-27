//TODO: add layout full-component's details of reservation's page
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reserve a table | Alex Bar",
	description: "Reserve a table at Alex Bar in Poland.",
};

export default function ReservationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="min-h-screen bg-slate-900">{children}</div>;
}