setup:
	rm -rf merch-it merch-it-api acquire-it acquire-it-api pcc issue-it
	git clone git@github.com:insurance-fraud/merch-it.git
	git clone git@github.com:insurance-fraud/merch-it-api.git
	git clone git@github.com:insurance-fraud/acquire-it.git
	git clone git@github.com:insurance-fraud/acquire-it-api.git
	git clone git@github.com:insurance-fraud/pcc.git
	git clone git@github.com:insurance-fraud/issue-it.git

run:
	cd merch-it && docker-compose up &
	cd merch-it-api && docker-compose up
