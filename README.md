create a virtual environment using python -m venv venv 
then activate the virtual env using cd venv and then come back to root directory 

TO start frontend 
->cd Booking 
->npm install
->npm run dev

To start Backend
->cd server
->pip install -r requirements.txt
->pyhton manage.py makemigrations
->python manage.py migrate
->python manage.py runserver
NOTE-> This will not work on Github code space beacuse it is based on Linux for that you have to remove pywin=305 from requirements.txt

Landing Page 
![Uploading image.png…]()