#!/bin/bash

echo "🧹 Starting cleanup process..."

# Create a backup directory
BACKUP_DIR="./backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Function to backup and remove file
backup_and_remove() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "📦 Backing up: $file"
        cp "$file" "$BACKUP_DIR/"
        echo "🗑️ Removing: $file"
        rm "$file"
    fi
}

# Function to backup and remove directory
backup_and_remove_dir() {
    local dir="$1"
    if [ -d "$dir" ]; then
        echo "📦 Backing up directory: $dir"
        cp -r "$dir" "$BACKUP_DIR/"
        echo "🗑️ Removing directory: $dir"
        rm -rf "$dir"
    fi
}

echo "🔍 Identifying unused files..."

# Remove example/template files
backup_and_remove "README.md"  # Contains template content
backup_and_remove "src/pages/example.astro"
backup_and_remove "src/pages/demo.astro"

# Remove unused configuration files
backup_and_remove ".env.example"

# Remove unused test files if not actively testing
if [ ! -f "vitest.config.ts" ]; then
    backup_and_remove_dir "tests"
    backup_and_remove "playwright.config.ts"
fi

# Remove unused style files
# (keeping only the ones actively imported in index.css)
backup_and_remove "src/styles/unused-styles.css"
backup_and_remove "src/styles/old-theme.css"

# Remove unused component files
# (based on the imports seen in the codebase)
backup_and_remove "src/components/unused/OldNavbar.astro"
backup_and_remove "src/components/unused/DeprecatedFooter.astro"

# Remove unused image assets
backup_and_remove "public/images/unused-hero.jpg"
backup_and_remove "public/images/old-logo.svg"

# Remove unused content
backup_and_remove_dir "src/content/drafts"
backup_and_remove_dir "src/content/archive"

# Clean up development artifacts
rm -rf .astro
rm -rf dist
rm -rf node_modules/.cache

echo "✨ Cleanup complete! Backup created at: $BACKUP_DIR"
echo "⚠️  Please review the backup directory before deleting it."
echo "💡 To restore any files, copy them back from the backup directory." 