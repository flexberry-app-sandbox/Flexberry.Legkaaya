docker build --no-cache -f SQL\Dockerfile.PostgreSql -t legkaaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t legkaaya-java/app ../../..
