import React, { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User response:", outcome);
    setShowInstall(false);
    setDeferredPrompt(null);
  };

  if (process.env.NODE_ENV === "production") return null;
  if (!showInstall) return null;

  return (
    <button
      onClick={handleInstallClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#0ea5a4",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      Install App (Dev Mode)
    </button>
  );
}
