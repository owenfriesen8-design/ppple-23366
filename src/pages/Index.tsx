import { Button } from "@/components/ui/button";
import QuickStartGuide from "@/components/QuickStartGuide";
import { useEffect, useState } from "react";
import { Star, Lock } from "lucide-react";
const Index = () => {
  const [ageVerified, setAgeVerified] = useState<boolean>(false);
  const [isGerman, setIsGerman] = useState<boolean>(() => {
    if (typeof navigator !== "undefined") {
      const langs = navigator.languages || [navigator.language];
      return Array.isArray(langs) && langs.some((l) => l?.toLowerCase().startsWith("de"));
    }
    return false;
  });
  const [isCanadian, setIsCanadian] = useState<boolean>(false);

  const translations = {
    en: {
      ageQuestion: "Are you over 18?",
      yes: "Yes",
      no: "No",
      mainTitle: "Get Cash Today",
      subtitle: "Receive cash deposited straight to you today. Limited spots available!",
      mainHeading: "",
      rewardProgressTitle: "",
      quickStartTitle: "",
      steps: [
        { title: "Sign Up & Claim $5 Bonus", subtitle: "Create your free account and instantly receive a $5 welcome bonus to get started." },
        { title: "Finish Deals & Offers", subtitle: "Choose from 100+ available offers. Complete 2-3 offers that interest you." },
        { title: "Claim Your Cash", subtitle: "Money arrives within 24h. Get paid fast and easy!" },
      ],
      cta: "Start Earning Now",
      socialProof: "Join thousands earning extra cash daily",
      securityBadge: "Secure & Private",
      tapInstall: "Click below to get started",
      security: "✓ Trusted by 50,000+ Users • ✓ Fast 24-Hour Payouts • ✓ No Credit Card Required",
    },
    de: {
      ageQuestion: "Sind Sie über 18?",
      yes: "Ja",
      no: "Nein",
      mainTitle: "Erhalte heute Geld",
      subtitle: "Erhalte Geld direkt ausgezahlt heute. Begrenzte Plätze verfügbar!",
      mainHeading: "",
      rewardProgressTitle: "",
      quickStartTitle: "",
      steps: [
        { title: "Registrieren & $5 Bonus sichern", subtitle: "Erstelle dein kostenloses Konto und erhalte sofort einen $5 Willkommensbonus." },
        { title: "Angebote abschließen", subtitle: "Wähle aus über 100 verfügbaren Angeboten. Schließe 2-3 Angebote ab, die dich interessieren." },
        { title: "Fordere dein Geld an", subtitle: "Geld kommt innerhalb von 24 Std. an. Schnell und einfach ausgezahlt!" },
      ],
      cta: "Jetzt Verdienen",
      socialProof: "Tausende verdienen täglich extra Geld",
      securityBadge: "Sicher & Privat",
      tapInstall: "Klicke unten, um zu beginnen",
      security: "✓ Vertraut von 50.000+ Nutzern • ✓ Schnelle 24-Stunden-Auszahlung • ✓ Keine Kreditkarte erforderlich",
    },
  } as const;

  const t = isGerman ? translations.de : translations.en;

  const handleCTAClick = () => {
    window.open('https://uplevelrewarded.com/aff_c?offer_id=3259&aff_id=23027', '_blank');
  };

  useEffect(() => {
    let cancelled = false;

    // Country check for Germany and Canada
    fetch("https://ipapi.co/country/")
      .then((r) => r.text())
      .then((code) => {
        if (!cancelled) {
          const country = code.trim().toUpperCase();
          if (country === "DE") {
            setIsGerman(true);
          } else if (country === "CA") {
            setIsCanadian(true);
          }
        }
      })
      .catch(() => {
        // ignore network errors
      });

    // Language and SEO adjustments
    document.documentElement.lang = isGerman ? "de" : "en";
    document.title = isGerman
      ? "Geld verdienen — Umfragen & Angebote"
      : "Get Cash Today — Surveys & Offers";

    const desc = isGerman
      ? "Erhalte Geld direkt ausgezahlt heute. Begrenzte Plätze verfügbar!"
      : "Receive cash deposited straight to you today. Limited spots available!";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    return () => {
      cancelled = true;
    };
  }, [isGerman]);

  // Age verification screen
  if (!ageVerified) {
    return (
      <div className="min-h-screen bg-gradient-background relative overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-md px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-border/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              {t.ageQuestion}
            </h2>
            <div className="flex flex-col gap-4">
              <Button
                variant="success"
                size="xl"
                className="w-full text-lg font-semibold py-6 rounded-xl"
                onClick={() => setAgeVerified(true)}
              >
                {t.yes}
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full text-lg font-semibold py-6 rounded-xl"
                onClick={() => setAgeVerified(true)}
              >
                {t.no}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-md px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6">
          
          {/* Main Title */}
          <div className="text-center space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight px-2">
              {t.mainTitle}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              {t.subtitle}
            </p>
          </div>

          {/* Quick Start Guide */}
          <QuickStartGuide title="" steps={t.steps} />

          {/* CTA Button */}
          <div className="py-3 sm:py-4 space-y-3">
            <Button 
              variant="success" 
              size="xl" 
              className="w-full text-base sm:text-lg md:text-xl font-semibold py-5 sm:py-6 md:py-8 rounded-2xl animate-pulse-glow touch-manipulation active:scale-95 transition-transform"
              onClick={handleCTAClick}
            >
              {t.cta}
            </Button>
            
            {/* Social Proof */}
            <p className="text-center text-xs sm:text-sm text-muted-foreground px-2">
              {t.socialProof}
            </p>
            
            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{t.securityBadge}</span>
            </div>
          </div>

          {/* Trust Signal */}
          <div className="text-center pt-2 space-y-2">
            <div className="flex items-center justify-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm px-2">
              {t.security}
            </p>
          </div>

        </div>
    </div>
  );
};

export default Index;
