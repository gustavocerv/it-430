#
# FROM --platform=linux/amd64 ubuntu:latest
FROM python:3.11-slim-bookworm
RUN apt update -y
RUN apt install build-essential -y
RUN apt install apache2 libapache2-mod-wsgi-py3 -y
RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		postgresql-client \
	&& rm -rf /var/lib/apt/lists/*
RUN mkdir -p /django/site/public/media /django/site/public/static /django/site/logs

COPY . /django/
WORKDIR /django/
RUN python -m venv /django/venv
RUN /django/venv/bin/pip install -r requirements.txt
RUN /django/venv/bin/python manage.py collectstatic --noinput

COPY ./000-default.conf /etc/apache2/sites-available/

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]

EXPOSE 80
