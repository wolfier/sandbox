freeze:
	python3 -m pip freeze > requirements.txt

install:
	python3 -m pip install --upgrade pip
	python3 -m pip install -r requirements.txt

server:
	python3 backend/run.py

restart:
	service apache2 reload
	service apache2 restart

error:
	tail -100 /var/log/apache2/error.log

error-blog:
	tail -100 /var/log/apache2/blog-error.log 
