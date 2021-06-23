set -e

SECONDS=0

timestamp=$(date +%s)
image=devops.makethatold.com:49003/kmm/$1-socket-proxy-server:"${timestamp}"

docker build -f LocalDockerfile --compress . -t $image --build-arg=env=$1
docker push $image

# sh deploy.$1.sh $image

duration=$SECONDS

echo "$1 Socket Proxy server dockerized! Took $duration seconds" | terminal-notifier -sound default
