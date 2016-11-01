freeze:
	python3 -m pip freeze > requirements.txt

install:
	python3 -m pip install --upgrade pip
	python3 -m pip install -r requirements.txt

server:
	python3 app/app.py
