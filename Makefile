# Variables
PRETTIER_FILES = "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
ESLINT_FILES = "src/**/*.{js,jsx,ts,tsx}"

# Formatting
.PHONY: format
format:
	./node_modules/.bin/prettier --write $(PRETTIER_FILES)

# Linting
.PHONY: lint
lint:
	./node_modules/.bin/eslint --fix $(ESLINT_FILES)

# Testing
.PHONY: test
test:
	./node_modules/.bin/jest --coverage

# Sorting imports
.PHONY: sort
sort:
	./node_modules/.bin/eslint --fix --rule 'import/order: ["error", {"alphabetize": {"order": "asc"}}]' $(ESLINT_FILES)

# Install dependencies
.PHONY: install
install:
	npm install

# Run all tasks
.PHONY: all
ready: install format sort lint