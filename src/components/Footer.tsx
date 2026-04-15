export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-8 text-center">
      <p className="text-sm font-semibold gradient-text">SIDI</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Sistema Inteligente de Diagnóstico Industrial © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
