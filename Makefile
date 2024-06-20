dev:
	docker compose up -d --build
	docker compose logs web -f

prod:
	docker compose --env-file .env.prod up -d --build

lint:
	COMPOSE_FILE="docker-compose.yml:docker-compose.test.yml" docker compose run --build --rm web npm run lint
