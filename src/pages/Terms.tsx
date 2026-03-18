import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-20">
        <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
          <p>
            Welcome to Rush Automations. These Terms of Service outline the rules and regulations for the use of our services.
          </p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing this website we assume you accept these terms and conditions.</p>

          <h2>2. User Content</h2>
          <p>In these terms and conditions, "your user content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website.</p>

          <h2>3. Modifications to the Service</h2>
          <p>Rush Automations reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice.</p>

          <p className="mt-8 text-muted-foreground text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
