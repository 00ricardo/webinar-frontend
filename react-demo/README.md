# Computação Móvel 20/21
#
## WEBINAR - FRONTEND FRAMEWORKS WITH HYBRID APPROACHES (Native + Web)
#
### Init your React Native app
Follow these steps to get started with your CRUD application. If you had problems with some step please check our [documentation] to solve your issue .
### Installation
React Native requires Node.js v10+ to run. To install it click [here](https://nodejs.org/en/download/).

##### 1 - Install the dependencies and configurations. Open command line and type:
###### 1.1 - Install Node and expo-cli
#
```sh
node -v
npm install -g expo-cli
```
###### 1.2 - Open PowerShell as admin and run:
#
```sh
Set-ExecutionPolicy RemoteSigned
```
###### 1.3 - Open your ID and type:
#
```sh
git clone https://github.com/00ricardo/webinar-frontend.git
cd webinar-frontend/React\ Native/firsrproject/
expo init firsrproject
```

This command will show you the next:

`Choose a template: » - Use arrow-keys. Return to submit.`
`----- Managed workflow ----- `
`>   blank               a minimal app as clean as an empty canvas`
`    blank (TypeScript)  same as blank but with TypeScript configuration`
`    tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript`
`    ----- Bare workflow -----}`
`    minimal             bare and minimal, just the essentials to get you started`

###### 1.4 - Make sure to select the correct template. `blank a minimal app as clean as an empty canvas`. That means that you are creating an app from scratch! This will take some seconds, Javascript dependencies are being installed. Go get some coffe... or beer!
#
After the dependencies are installed, take a look about your project structure. You will have something like this:
![title](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210302172407/Capture32.png)

##### 2 - Configuration:

###### 2.1 - Create Task Component. 
###### 2.1 - Create TaskManager Component.
###### 2.1 - 



- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.


## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [documentation]: <https://github.com/joemccann/dillinger>
   [here]: <https://nodejs.org/en/download/>
