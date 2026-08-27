export default function RegisterLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="min-h-screen bg-slate-900">{children}</div>;
}
