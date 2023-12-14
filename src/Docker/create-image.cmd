docker build --no-cache -f SQL\Dockerfile.PostgreSql -t legkaaya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t legkaaya/app ../..
