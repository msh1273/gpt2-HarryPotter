FROM pytorch/pytorch:1.6.0-cuda10.1-cudnn7-runtime

COPY . .

RUN pip install -r requirements.txt

CMD python3 app.py
