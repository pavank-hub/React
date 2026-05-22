npm init -> package.json

Install dependency:

npm install react
npm install react-dom
npm install react-redux

Devdependency install:

npm install -D parcel

To run code:

npx parcel index.html

To build production ready code:

npx parcel dist index.html


Theory:
DevDependencies are packages that are needed only during development not for production
syntax:

npm install -D parcel

Dependency(in production)


IMPORT:

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

Creating root in index.html

<body>
    <div id="root"></div>
    <script type="module" src="./src/script.js"></script>
</body>