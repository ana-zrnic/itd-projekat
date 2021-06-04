import os
import subprocess

subprocess.call(('cd ' + r"C:\Users\WIN10\Desktop\itd-angular\BEtest\angular-flask\dist\angular-flask" + ' &&' + ' xcopy ' + r"test.txt" + r" C:\Users\WIN10\Desktop\itd-angular\BEtest\static"), shell=True)