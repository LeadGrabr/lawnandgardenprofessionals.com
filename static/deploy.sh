#!/bin/bash
aws s3 sync . s3://lawnandgardenprofessionals.com-images --profile "leadgrabr" --exclude "deploy.sh" --exclude ".DS_Store"
