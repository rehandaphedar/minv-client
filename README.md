# Introduction

This is the official client for [minv](https://sr.ht/~rehandaphedar/minv), built with SvelteKit and Flowbite.

# Install Instructions

## Docker + Compose

Navigate to an empty directory:

```shell
mkdir minv-client
cd minv-client
```

Download and edit `docker-compose.yaml`, especially the `API_SERVER_URI` environment variable:

```shell
wget https://git.sr.ht/~rehandaphedar/minv-client/blob/main/docker-compose.yaml
$EDITOR docker-compose.yaml
```

Run the container

```shell
docker compose up
```

## Manual

### Build Dependencies

- `node`

### Runtime Dependencies

- `node`

### Building

Clone the source code

```shell
git clone https://git.sr.ht/~rehandaphedar/minv-client
cd minv-client
```

Install dependencies and build

```shell
pnpm # (Or `npm i` etc.)
pnpm build # (Or `npm run build` etc.)
```

### Deploying

Copy the `package.json` file and the `build` folder. Then, install dependencies, set environment variables, and run:

```shell
npm i --production # (or `npm i --production` etc.)
export API_SERVER_URI=https://api.example.com
node build
```

# Misc

- You can use the [nohup](https://linux.die.net/man/1/nohup) command to easily redirect logs to a file. Also helpful when trying to keep the app alive after exiting an SSH session.
