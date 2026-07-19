import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Account() {
  const [credits] = useState(1240);
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Account & Billing</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Usage & Credits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Credits:</strong> {credits}</p>
            <p><strong>Rate:</strong> $10 per 1000 credits</p>
            <p>Tribe messages: 100 per credit. AI summary/search: cost + 20%.</p>
            <p>Drive Draw AI: cost + 20%.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Linked Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>WorkOS:</strong> Identity platform (shared across Rush suite)</p>
            <p><strong>Google:</strong> Required for Drive Draw</p>
            <p><strong>Stripe:</strong> Payment platform</p>
            <Button asChild><Link to="https://stripe.com">Manage Billing</Link></Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-4">
        <Button asChild><Link to="/">Back to Home</Link></Button>
        <Button asChild variant="outline"><a href="https://tribe-platform.netlify.app">Tribe</a></Button>
        <Button asChild variant="outline"><a href="https://drive-draw.netlify.app">Drive Draw</a></Button>
      </div>
    </div>
  );
}
