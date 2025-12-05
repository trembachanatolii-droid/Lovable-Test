#!/bin/bash

# Download Free Images Script
# Downloads free images from Pexels and Pixabay to replace Unsplash images

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting free image download...${NC}"

# Create images directory if it doesn't exist
IMAGES_DIR="/home/user/Lovable-Test/public/images"
mkdir -p "$IMAGES_DIR"
echo -e "${GREEN}Created/verified directory: $IMAGES_DIR${NC}\n"

# Change to images directory
cd "$IMAGES_DIR"

# PORT/SHIPPING IMAGES
echo -e "${BLUE}Downloading PORT/SHIPPING images...${NC}"

echo "Downloading port-aerial-cargo.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o port-aerial-cargo.jpg \
  "https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?w=1920"

echo "Downloading port-container-yard.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o port-container-yard.jpg \
  "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?w=1920"

echo "Downloading port-containers-colorful.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o port-containers-colorful.jpg \
  "https://images.pexels.com/photos/3063470/pexels-photo-3063470.jpeg?w=1920"

echo "Downloading port-tanker-unloading.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o port-tanker-unloading.jpg \
  "https://images.pexels.com/photos/6595774/pexels-photo-6595774.jpeg?w=1920"

echo "Downloading port-night-containers.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o port-night-containers.jpg \
  "https://images.pexels.com/photos/8777703/pexels-photo-8777703.jpeg?w=1920"

# CITY SKYLINES
echo -e "\n${BLUE}Downloading CITY SKYLINE images...${NC}"

echo "Downloading skyline-los-angeles.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o skyline-los-angeles.jpg \
  "https://cdn.pixabay.com/photo/2015/07/24/02/43/los-angeles-857799_1280.jpg"

echo "Downloading skyline-san-francisco.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o skyline-san-francisco.jpg \
  "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?w=1920"

echo "Downloading skyline-san-diego.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o skyline-san-diego.jpg \
  "https://cdn.pixabay.com/photo/2015/08/02/21/12/san-diego-872167_1280.jpg"

# OFFICE/BUSINESS
echo -e "\n${BLUE}Downloading OFFICE/BUSINESS images...${NC}"

echo "Downloading office-skyscraper.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o office-skyscraper.jpg \
  "https://cdn.pixabay.com/photo/2017/07/10/23/49/club-2492011_1280.jpg"

echo "Downloading office-building-modern.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o office-building-modern.jpg \
  "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg"

# TECHNOLOGY
echo -e "\n${BLUE}Downloading TECHNOLOGY images...${NC}"

echo "Downloading tech-circuit-board.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o tech-circuit-board.jpg \
  "https://images.pexels.com/photos/270385/pexels-photo-270385.jpeg?w=1920"

echo "Downloading tech-circuit-green.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o tech-circuit-green.jpg \
  "https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?w=1920"

# LEGAL
echo -e "\n${BLUE}Downloading LEGAL images...${NC}"

echo "Downloading legal-gavel.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o legal-gavel.jpg \
  "https://cdn.pixabay.com/photo/2018/07/14/15/27/hammer-3537342_1280.jpg"

echo "Downloading legal-scales.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o legal-scales.jpg \
  "https://cdn.pixabay.com/photo/2017/01/31/17/14/justice-2025906_1280.png"

# VINEYARD
echo -e "\n${BLUE}Downloading VINEYARD images...${NC}"

echo "Downloading vineyard-grapes.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o vineyard-grapes.jpg \
  "https://images.pexels.com/photos/45209/grapes-bunch-fruit-blue-45209.jpeg?w=1920"

# AVIATION
echo -e "\n${BLUE}Downloading AVIATION images...${NC}"

echo "Downloading aviation-airplane.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o aviation-airplane.jpg \
  "https://images.pexels.com/photos/5726119/pexels-photo-5726119.jpeg?w=1920"

echo "Downloading aviation-aircraft.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o aviation-aircraft.jpg \
  "https://images.pexels.com/photos/123025/pexels-photo-123025.jpeg?w=1920"

# WAREHOUSE
echo -e "\n${BLUE}Downloading WAREHOUSE images...${NC}"

echo "Downloading warehouse-logistics.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o warehouse-logistics.jpg \
  "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=1920"

# OIL/ENERGY
echo -e "\n${BLUE}Downloading OIL/ENERGY images...${NC}"

echo "Downloading energy-refinery.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o energy-refinery.jpg \
  "https://cdn.pixabay.com/photo/2015/12/04/14/45/industry-1076710_1280.jpg"

# GLOBE/WORLD
echo -e "\n${BLUE}Downloading GLOBE/WORLD images...${NC}"

echo "Downloading globe-world-map.jpg..."
curl -L -H "User-Agent: Mozilla/5.0" \
  -o globe-world-map.jpg \
  "https://images.pexels.com/photos/19342691/pexels-photo-19342691.jpeg?w=1920"

echo -e "\n${GREEN}All images downloaded successfully to $IMAGES_DIR${NC}"
echo -e "${GREEN}Total images downloaded: 21${NC}"
