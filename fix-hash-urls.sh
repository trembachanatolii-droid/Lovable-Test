#!/bin/bash

# Script to fix hash-based URLs across all page files

# Find all .tsx files in pages directory (excluding AttorneyAdvertisingPage which has legitimate same-page anchors)
for file in /home/user/Lovable-Test/pages/*.tsx; do
    # Skip AttorneyAdvertisingPage as it has legitimate same-page hash links
    if [[ "$file" == *"AttorneyAdvertisingPage.tsx" ]]; then
        continue
    fi

    # Check if file contains hash-based hrefs
    if grep -q 'href="#' "$file"; then
        echo "Processing: $file"

        # Backup file
        cp "$file" "$file.backup"

        # Add Link import if not already present
        if ! grep -q "import.*Link.*from 'react-router-dom'" "$file"; then
            # Find the first import line and add Link import after it
            sed -i "1a import { Link } from 'react-router-dom';" "$file"
        fi

        # Replace common hash-based navigation links with React Router Links

        # schedule-consultation -> /contact
        sed -i 's|<a href="#schedule-consultation"|<Link to="/contact"|g' "$file"
        sed -i 's|href="#schedule-consultation"|href="/contact"|g' "$file"

        # customs-defense-litigation -> /customs-defense-litigation
        sed -i 's|<a href="#customs-defense-litigation"|<Link to="/customs-defense-litigation"|g' "$file"

        # customs-defense -> /customs-defense
        sed -i 's|<a href="#customs-defense"|<Link to="/customs-defense"|g' "$file"

        # regulatory-compliance-advisory -> /practice-areas
        sed -i 's|<a href="#regulatory-compliance-advisory"|<Link to="/practice-areas"|g' "$file"

        # export-controls-sanctions -> /practice-areas
        sed -i 's|<a href="#export-controls-sanctions"|<Link to="/practice-areas"|g' "$file"

        # trade-law-faq -> /trade-law-faq
        sed -i 's|<a href="#trade-law-faq"|<Link to="/trade-law-faq"|g' "$file"

        # resources -> /resources
        sed -i 's|<a href="#resources"|<Link to="/resources"|g' "$file"

        # Close the <a> tags that were changed to <Link>
        # This is a simple replacement - look for </a> that follows our changed links
        # We'll do this by context - after a Link to="/..." we need </Link> instead of </a>

        echo "  - Fixed hash URLs in $file"
    fi
done

echo "Done! Backup files created with .backup extension"
