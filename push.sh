#!/bin/bash
set -e

REGISTRY=registry.hrgn.dk
CURRENT_VERSION=$(curl -s https://$REGISTRY/v2/hrgn-dk/tags/list \
  | jq -r '.tags[] | select(test("^v"))' \
  | sort -V | tail -n1)

NEXT_VERSION=$(echo "$CURRENT_VERSION" | awk -F. -v OFS=. '{$NF+=1; print}')
CURRENT_IMAGE=$REGISTRY/hrgn-dk:$CURRENT_VERSION
NEXT_IMAGE=$REGISTRY/hrgn-dk:$NEXT_VERSION

echo "Current tag: $CURRENT_VERSION"
echo "Next tag: $NEXT_VERSION"

docker pull $CURRENT_IMAGE || true
make build
LOCAL_IMAGE_ID=$(docker images -q hrgn-dk-preview)
REMOTE_IMAGE_ID=$(docker images -q $CURRENT_IMAGE)

if [ "$LOCAL_IMAGE_ID" != "$REMOTE_IMAGE_ID" ]; then
    docker tag hrgn-dk-preview $NEXT_IMAGE
    docker push $NEXT_IMAGE
    echo $NEXT_IMAGE
else
    echo "No changes detected. Skipping push."
fi
