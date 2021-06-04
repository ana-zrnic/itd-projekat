import os
import subprocess
import time

CURRENT_DIRECTORY = os.getcwd()
directories = os.listdir(CURRENT_DIRECTORY)
NON_ANGULAR_DIRS = ['static', 'templates', 'venv']
print(CURRENT_DIRECTORY, "lmao", directories)

for directory in directories:
    if "." not in directory and directory not in NON_ANGULAR_DIRS:
        ANGULAR_PROJECT_PATH = os.path.join(CURRENT_DIRECTORY, directory)
        DIST_PATH = os.path.join(ANGULAR_PROJECT_PATH, 'dist', directory)

print(ANGULAR_PROJECT_PATH)

print(DIST_PATH)

print("ovo ispod")
FLASK_STATIC_PATH = os.path.join(CURRENT_DIRECTORY, 'static')
FLASK_TEMPLATES_PATH = os.path.join(CURRENT_DIRECTORY, 'templates')

print(FLASK_STATIC_PATH)
print(FLASK_TEMPLATES_PATH)
print(os.listdir(DIST_PATH))


dir_exists = True

while dir_exists:
    
    files = os.listdir(DIST_PATH)
    static_files = ""
    html_files = ""
    for file in files:
        if '.js' in file or '.js.map' in file or '.ico' in file:
            static_files += (file + ' ')
        if '.html' in file:
            html_files += (file + ' ')
    if len(static_files) > 0:
        print("OVO GLEDAJ", static_files)
    if len(html_files) > 0:
        print("OVO GLEDAJ", html_files)
        
    
    time.sleep(10.0)