import { auth } from "@clerk/nextjs/server";

async function VoicePage() {
  const { has } = await auth();

  const hasProPlan = has({ plan: "ai_basic" }) || has({ plan: "ai_pro" });
  return <div className="min-h-screen "></div>;
}

export default VoicePage;
