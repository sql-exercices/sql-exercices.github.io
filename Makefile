.PHONY: install start build deploy clean help

# Development server with legacy OpenSSL support (required for Node.js 17+)
start:
	NODE_OPTIONS=--openssl-legacy-provider npm start

# Install dependencies
install:
	npm install

# Build for production
build:
	NODE_OPTIONS=--openssl-legacy-provider npm run build

# Deploy to GitHub Pages
deploy: build
	npx gh-pages -d build

# Clean build artifacts and dependencies
clean:
	rm -rf build node_modules

# Reinstall dependencies
reinstall: clean install

# Show help
help:
	@echo "Available commands:"
	@echo "  make install    - Install npm dependencies"
	@echo "  make start      - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make deploy     - Build and deploy to GitHub Pages"
	@echo "  make clean      - Remove build artifacts and node_modules"
	@echo "  make reinstall  - Clean and reinstall dependencies"
