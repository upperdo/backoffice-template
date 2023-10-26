#!/bin/bash

# Load environment variables from .env file
if [[ -f .env ]]; then
  source .env
fi

# Function to log in to Appwrite
function login() {
  echo "Login into appwrite"
     if [[ "$APPWRITE_SELF_SIGNED" == "true" ]]; then
      appwrite client --selfSigned true
    fi

  if [[ "$APPWRITE_SET_ENDPOINT" == "true" ]]; then
    appwrite client --endpoint "${APPWRITE_CLI_ENDPOINT}"
    appwrite login
  else
    appwrite login
  fi  
  
}

# Main script
login