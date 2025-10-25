#!/bin/bash

# WP-CC CLI Installation Script

set -e

echo "🚀 Installing WP-CC CLI..."

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required. Please install Node.js 18+ first."
    exit 1
fi

if ! command -v docker &> /dev/null; then
    echo "❌ Docker is required. Please install Docker first."
    exit 1
fi

if ! command -v git &> /dev/null; then
    echo "❌ Git is required. Please install Git first."
    exit 1
fi

echo "✅ Prerequisites satisfied"

# Install dependencies
echo "📦 Installing npm dependencies..."
npm install

# Setup environment
if [ ! -f .env ]; then
    echo "⚙️  Setting up environment configuration..."
    cp .env.example .env
    echo "📝 Please edit .env file with your configuration"
fi

# Create directories
echo "📁 Creating necessary directories..."
mkdir -p logs data

# Make executable
echo "🔐 Setting permissions..."
chmod +x bin/wp-cc
npm run prepare

# Test installation
echo "🧪 Testing installation..."
if node bin/wp-cc version > /dev/null 2>&1; then
    echo "✅ Installation successful!"
    echo ""
    echo "🎉 WP-CC CLI is ready to use!"
    echo ""
    echo "Quick start:"
    echo "  ./bin/wp-cc \"create project called my-blog on port 8080\""
    echo "  ./bin/wp-cc \"list projects\""
    echo "  ./bin/wp-cc \"help\""
    echo ""
    echo "For global installation:"
    echo "  npm link"
    echo "  wp-cc \"create project called my-blog on port 8080\""
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi