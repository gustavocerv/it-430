FROM python:3.11-slim-bookworm

# Install system dependencies
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        build-essential \
        apache2 \
        libapache2-mod-wsgi-py3 \
        postgresql-client \
        python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Create required directories
RUN mkdir -p /django/site/public/media /django/site/public/static /django/site/logs

# Copy project files
COPY . /django/

WORKDIR /django/

# Create venv and install dependencies
RUN python3 -m venv /django/venv && \
    /django/venv/bin/pip install --upgrade pip && \
    /django/venv/bin/pip install -r requirements.txt

# Collect static files
RUN /django/venv/bin/python manage.py collectstatic --noinput

# Copy Apache config
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf

# Enable the site
RUN a2ensite 000-default.conf

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
