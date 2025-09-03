#!/bin/bash

echo "🚀 Starting local development server..."

# Stop any process that is already running on port 3000
echo "🛑 Stopping any existing processes on port 3000..."
lsof -i :3000 | awk 'NR>1 {print $2}' | xargs -r kill -9

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Start the development server
echo "🔥 Starting Next.js development server..."
echo "🌐 Your app will be available at: http://localhost:3000"
echo ""

# Start the server in the background
npm run dev &

# Wait for the server to be ready
echo "⏳ Waiting for server to start..."
sleep 5

# Check if the server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Server is running successfully!"
    echo "🌐 Open your browser to: http://localhost:3000"
    echo ""
    echo "Press Ctrl+C to stop the server"
else
    echo "❌ Server failed to start. Check the logs above."
    exit 1
fi

# Keep the script running and wait for the server process to exit
wait $!
