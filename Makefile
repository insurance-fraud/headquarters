setup:
	rm -rf merch-it merch-it-api acquire-it acquire-it-api pcc issue-it
	git clone git@github.com:insurance-fraud/merch-it.git && cd merch-it && docker-compose build
	git clone git@github.com:insurance-fraud/merch-it-api.git && cd merch-it-api && docker-compose build
	git clone git@github.com:insurance-fraud/acquire-it.git && cd acquire-it && docker-compose build
	git clone git@github.com:insurance-fraud/acquire-it-api.git && cd acquire-it-api && docker-compose build
	git clone git@github.com:insurance-fraud/pcc.git && cd pcc && docker-compose build
	git clone git@github.com:insurance-fraud/issue-it.git && cd issue-it && docker-compose build
	yarn install

run:
	docker-compose up

setup_db:
	docker-compose exec acquire-it-api.web bin/rails db:setup
	docker-compose exec merch-it-api.web bin/rails db:setup
	docker-compose exec pcc.web bin/rails db:setup
	docker-compose exec issue-it.web bin/rails db:setup

test:
	yarn cy:run
