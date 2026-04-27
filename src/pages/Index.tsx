// Renders the static Safewell site (in /public/static-site) inside the Lovable preview.
// The full static project also lives at /static-site/ in the repo for direct deploy
// to Vercel / Netlify / GitHub Pages.
const Index = () => {
  return (
    <iframe
      src="/static-site/index.html"
      title="Safewell Security Services"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
};

export default Index;
