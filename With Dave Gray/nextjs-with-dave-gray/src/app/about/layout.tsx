export default function HelloLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (<>
    <nav>about layout</nav>
    <main>
    {children}
    </main>
    </>
    )
  }