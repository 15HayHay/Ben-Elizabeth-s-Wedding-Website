FROM nginx:1.29.7-alpine@sha256:e3f5ac6fb2b0ab577300bad4a9df7d4d0632c4baaa7416ac84e56184cfde9f82
COPY .  /usr/share/nginx/html/
