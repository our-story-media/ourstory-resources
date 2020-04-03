export GOOGLE_APPLICATION_CREDENTIALS=google-services.json

#CREATE GLOSSARY

# curl -X POST \
# -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
# -H "Content-Type: application/json; charset=utf-8" \
# -d @request.json \
# https://translation.googleapis.com/v3beta1/projects/integral-kiln-490/locations/us-central1/glossaries

#GET OPERATION STATUS
curl -X GET \
-H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
https://translation.googleapis.com/v3beta1/projects/integral-kiln-490/locations/us-central1/operations/20200401-22491585806582-5e83aa2d-0000-2b17-be38-f4f5e8096dac

#GET GLOSSARY
# curl -X GET \
# -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
# https://translation.googleapis.com/v3beta1/projects/integral-kiln-490/locations/us-central1/glossaries