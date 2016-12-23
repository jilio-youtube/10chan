ssh root@178.62.251.8 '
  cd /root/10chan;
  git pull;
  npm install;
  forever stop index.js;
  forever start index.js
'
