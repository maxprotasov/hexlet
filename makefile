install:
		npm install --no-bin-links

start:
		npm run babel-node -- src/bin/brain-game.js

publish:
		npm publish

eslint:
		npm run eslint
