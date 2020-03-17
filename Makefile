setup:
	rm -rf merch-it merch-it-api acquire-it acquire-it-api pcc issue-it
	git clone https://github.com/insurance-fraud/merch-it.git \
		&& cd merch-it && docker-compose build
	git clone https://github.com/insurance-fraud/merch-it-api.git \
		&& cd merch-it-api && docker-compose build
	git clone https://github.com/insurance-fraud/acquire-it.git \
		&& cd acquire-it && docker-compose build
	git clone https://github.com/insurance-fraud/acquire-it-api.git \
		&& cd acquire-it-api && docker-compose build
	git clone https://github.com/insurance-fraud/pcc.git \
		&& cd pcc && docker-compose build
	git clone https://github.com/insurance-fraud/issue-it.git \
		&& cd issue-it && docker-compose build
	yarn install

setup_db:
	docker-compose exec acquire-it-api.web bin/rails db:setup
	docker-compose exec merch-it-api.web bin/rails db:setup
	docker-compose exec pcc.web bin/rails db:setup
	docker-compose exec issue-it.web bin/rails db:setup

run_ci:
	docker-compose up -d
	sleep 5

run:
	docker-compose up

test:
	npx wait-on http://localhost:3000 \
		http://localhost:3001 \
		http://localhost:4000 \
		http://localhost:4001 \
		http://localhost:5000 \
		http://localhost:5001 && yarn cy:run
	yarn test:jest puppeteer/
	yarn test:nightwatch nightwatch/
	yarn test:cafe chrome testcafe/
	yarn test:codeceptjs run
