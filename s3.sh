#!/bin/sh
set -e

# AWS Config
export AWS_ACCESS_KEY_ID="AKIAJN6KV56DSCESEE3Q"
export AWS_SECRET_ACCESS_KEY="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"

BUCKET="alix-cvc.altar.io"
OUTPATH="s3website"
LOCALPATH="docs"

aws s3 rm s3://$BUCKET --recursive
aws s3 sync $OUTPATH s3://$BUCKET --region eu-west-1

rm -rf "$LOCALPATH"/*
cp -r "$OUTPATH"/* $LOCALPATH
