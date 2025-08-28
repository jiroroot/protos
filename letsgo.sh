#!/bin/bash

# Stop any process that is already running on port 3000
lsof -i :3000 | awk 'NR>1 {print $2}' | xargs -r kill -9

# Install dependencies and start the server in the background
npm install && npm run dev &

# Wait for the server to be ready
sleep 10

# Get the process ID of the running server
pid=$!

# Get the preview URL and print it
echo "Your app is running at:"
echo "https://3000-${WEB_HOST}"

# Keep the script running and wait for the server process to exit
wait $pid
