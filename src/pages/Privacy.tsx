import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-20">
        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
          <p>
            At Rush Automations, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information to provide better services to all our users. The information we collect includes:</p>
          <ul>
            <li>Information you give us (e.g., account details, contact information).</li>
            <li>Information we get from your use of our services (e.g., usage data).</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect from all our services to provide, maintain, protect and improve them, to develop new ones, and to protect our users.</p>

          <h2>3. Cookies and Web Beacons</h2>
          <p>Like any other website, Rush Automations uses cookies to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>

          <p className="mt-8 text-muted-foreground text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
