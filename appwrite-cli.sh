#!/bin/bash

# Load environment variables from .env file
if [[ -f .env ]]; then
  source .env
fi

# Function to log in to Appwrite
function login() {
    # Set the project endpoint before login
  appwrite client --endpoint "$APPWRITE_ENDPOINT"
  appwrite login --email "$APPWRITE_EMAIL" --password "$APPWRITE_PASSWORD"
}

# Function to get project information
function get_project_info() {
  appwrite projects get --projectId "$APPWRITE_PROJECT_ID"
}

# Function to enable self-signed certificates
function enable_self_signed() {
  appwrite client --selfSigned "$APPWRITE_SELF_SIGNED"
}

# Function to display CLI help
function display_help() {
  appwrite help
}

# Function to configure CLI settings
function configure() {
  appwrite client "$@"
}

# Main script
case "$1" in
  "login")
    login
    ;;
  "get_project_info")
    get_project_info
    ;;
  "self_signed")
    enable_self_signed
    ;;
  "help")
    display_help
    ;;
  "config")
    shift
    configure "$@"
    ;;
  *)
    echo "Usage: $0 {login|get_project_info|self_signed|help|config}"
    exit 1
    ;;
esac
