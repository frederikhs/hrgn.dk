dev:
	docker compose up -d --build
	docker compose logs web -f

prod:
	docker compose --env-file .env.prod up -d --build

lint:
	docker compose --env-file .env.test run --build --rm web npm run lint
