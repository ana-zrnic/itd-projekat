import os
import subprocess
import time

CURRENT_DIRECTORY = os.getcwd()
directories = os.listdir(CURRENT_DIRECTORY)
NON_ANGULAR_DIRS = ['static', 'templates', 'venv']

for directory in directories:
    if "." not in directory and directory not in NON_ANGULAR_DIRS:
        ANGULAR_PROJECT_PATH = os.path.join(CURRENT_DIRECTORY, directory)
        DIST_PATH = os.path.join(ANGULAR_PROJECT_PATH, 'dist', directory)
        

FLASK_STATIC_PATH = os.path.join(CURRENT_DIRECTORY, 'static')
FLASK_TEMPLATES_PATH = os.path.join(CURRENT_DIRECTORY, 'templates')



#subprocess.call(('cd ' + ANGULAR_PROJECT_PATH + ' && ng build --watch --base-href /static/ &'), shell=True)

while True:
    try:
        files = os.listdir(DIST_PATH)
        static_files = []
        html_files = ""
        for file in files:
            if '.js' in file or '.js.map' in file or '.ico' in file or '.css' in file or '.css.map' in file or 'assets' in file:
                static_files.append(file + ' ')
            if '.html' in file:
                html_files += (file + ' ')
        if len(static_files) > 0:
            for i in range(len(static_files)):
                subprocess.call(('cd ' + DIST_PATH + ' &&' + ' xcopy ' + static_files[i]  + FLASK_STATIC_PATH), shell=True)
        if len(html_files) > 0:
            subprocess.call(('cd ' + DIST_PATH + ' &&' + ' xcopy ' + html_files  + FLASK_TEMPLATES_PATH), shell=True)
    except Exception as e:
        dir_exists = False
        print(e)

    time.sleep(10.0)