export GOOGLE_APPLICATION_CREDENTIALS=google-services.json
# curl -X POST \
# -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
# -H "Content-Type: application/json; charset=utf-8" \
# -d @request.json \
# https://translation.googleapis.com/v3beta1/projects/integral-kiln-490/locations/us-central1/glossaries


curl -X GET \
-H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
https://translation.googleapis.com/v3beta1/projects/integral-kiln-490/locations/us-central1/glossaries