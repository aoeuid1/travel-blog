export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-12 animate-in fade-in duration-500">
      {children}
    </div>
  );
}
