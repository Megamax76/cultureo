#!/bin/bash

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                                                               ║"
echo "║  🚀 Rafale Knowledge Bridge - Démarrage Simplifié            ║"
echo "║                                                               ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""
echo "📦 Installation des dépendances..."
echo ""

# Frontend dependencies
cd /home/user/cultureo/frontend
if [ ! -d "node_modules" ]; then
  echo "Installation frontend..."
  npm install --legacy-peer-deps
else
  echo "✅ Frontend déjà installé"
fi

echo ""
echo "✅ Installation terminée !"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎯 Démarrage du frontend..."
echo ""
echo "   👉 Frontend : http://localhost:3000"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter"
echo ""

npm run dev
