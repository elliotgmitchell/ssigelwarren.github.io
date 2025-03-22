#!/bin/bash

echo "Checking folder structure for Jekyll..."

# Check for _sass directory
if [ -d "_sass" ]; then
  echo "✓ _sass directory exists"
else
  echo "✗ _sass directory is missing - creating it"
  mkdir -p _sass
fi

# Check for CSS directory
if [ -d "assets/css" ]; then
  echo "✓ assets/css directory exists"
else
  echo "✗ assets/css directory is missing - creating it"
  mkdir -p assets/css
fi

# Check for main.scss in assets/css
if [ -f "assets/css/main.scss" ]; then
  echo "✓ assets/css/main.scss exists"
else
  echo "✗ assets/css/main.scss is missing or in the wrong location"
fi

# Check for sass partials
for file in _variables.scss _base.scss _layout.scss; do
  if [ -f "_sass/$file" ]; then
    echo "✓ _sass/$file exists"
  else
    echo "✗ _sass/$file is missing or in the wrong location"
  fi
done

echo "Done checking folder structure."