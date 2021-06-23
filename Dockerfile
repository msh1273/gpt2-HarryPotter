# our base image
FROM alpine:3.5

WORKDIR /the/workdir/path
# Install python and pip
RUN apk add --update py2-pip

COPY . .

# install Python modules needed by the Python app
RUN pip install -r requirements.txt

# tell the port number the container should expose
EXPOSE 5000

# run the application
CMD [ "python", "app.py"]
