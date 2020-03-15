FROM node:10-alpine AS alpine
WORKDIR /app
# A wildcard is used to ensure both package.json AND /*package-lock.json*/ yarn.lock are copied
COPY package.json .
COPY yarn.lock .
## install only the packages defined in the yarn.lock (faster than the normal yarn install)
RUN yarn install
# Copy the contents of the project to the image
COPY . .
# Run 'yarn start' when the container starts.
CMD ["yarn", "run", "start"]
