export default async function Home() {
  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-center font-headline md:text-5xl">
        WanderLogger
      </h1>
      <div className="text-center text-muted-foreground">
        <p className="text-lg">Welcome to your travel blog.</p>
      </div>
    </div>
  );
}
