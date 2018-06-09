#!/bin/bash

# https://developer.mozilla.org/en-US/docs/Mozilla/Thunderbird/Thunderbird_Configuration_Files
# http://kb.mozillazine.org/Files_and_folders_in_the_profile_-_Thunderbird
# %appdata%\thunderbird\profiles\[profile-name]\prefs.js

grep -vn "^user_pref(\".*\", .*);$" firefox/CHEF-KOCH_linux/user.js | \
grep -v "^[0-9]*://" | grep -v "^[0-9]*:$" | \
grep -v "^[0-9]*:user_pref(\".*\", .*); //.*$"

# if the grep above exited with code "0" then it found something which is bad
if [ $? -eq 0 ]; then
  echo ""
  echo "======================================================================="
  echo "Fix the above lines in the user.js file before continuing."
  exit 1
fi

# If any of these fail to complete then exit.
# These commands imply that this script must be run from the root of the repo.
cd firefox/windows
if [ $? -ne 0 ]; then
  echo "Failed to change into \"firefox/windows\""
  exit 2
fi

cp -f ../CHEF-KOCH_linux/user.js ./
if [ $? -ne 0 ]; then
  echo "Failed to copy user.js to the Windows Folder"
  exit 3
fi

uCHEF-KOCH_linux2dos user.js
if [ $? -ne 0 ]; then
  echo "Failed to convert user.js file to dos"
  exit 4
fi

echo "DONE!"