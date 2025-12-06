#!/bin/bash
# Pre-commit hook script
# This script runs before each commit to ensure code quality

set -e

echo "Running pre-commit checks..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx)$' || true)

if [ -z "$STAGED_FILES" ]; then
    echo -e "${YELLOW}No TypeScript files staged for commit.${NC}"
    exit 0
fi

echo "Checking staged TypeScript files..."

# Run TypeScript check
echo -e "\n${YELLOW}Running TypeScript check...${NC}"
if npx tsc --noEmit; then
    echo -e "${GREEN}TypeScript check passed!${NC}"
else
    echo -e "${RED}TypeScript check failed. Please fix errors before committing.${NC}"
    exit 1
fi

# Run ESLint on staged files
echo -e "\n${YELLOW}Running ESLint on staged files...${NC}"
if echo "$STAGED_FILES" | xargs npx eslint --max-warnings 0; then
    echo -e "${GREEN}ESLint check passed!${NC}"
else
    echo -e "${RED}ESLint check failed. Please fix errors before committing.${NC}"
    exit 1
fi

echo -e "\n${GREEN}All pre-commit checks passed!${NC}"
exit 0
