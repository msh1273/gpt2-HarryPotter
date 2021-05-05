# our base image
FROM alpine:3.5

# Install python and pip
RUN apk add --update py2-pip

# install Python modules needed by the Python app
COPY ../requirements.txt /usr/src/app/
RUN pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host=files.pythonhosted.org --no-cache-dir -r /usr/src/app/requirements.txt

# copy files required for the app to run
COPY app.py /usr/src/app/
COPY templates/index.html /usr/src/app/templates/
COPY static/index.js /usr/src/app/static/
WORKDIR /usr/src/app/
# tell the port number the container should expose
EXPOSE 5000

# run the application
CMD [ "python", "/usr/src/app/app.py"]