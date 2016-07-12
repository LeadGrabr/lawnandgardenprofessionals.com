#!/bin/bash
aws s3 sync . s3://media.lawnandgardenprofessionals.com --profile "leadgrabr" --exclude "deploy.sh" --exclude ".DS_Store"
