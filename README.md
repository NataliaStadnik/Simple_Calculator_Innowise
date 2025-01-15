# Simple_Calculator_Innowise

A simple calculator on JavaScript without libraries and frameworks.

There is an option to choose the colour scheme of the app.

## Task

[Innowise Lab Internship: Simple Calculator](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view)

## How to run the app

1. Install Dependencies: `npm install`;

2. Start:

   - Development mode: `npm run dev`;
   - Production mode: `npm run build`;
   - Check with ESlint: `npm run lint`;
   - Start tests: `npm run test`

## Folder Structure

```
├── .husky/                                   # Pre-commit hook
│   ├── _
│   └── pre-commit
├── src/                                      # Sources
│   ├── Calculator                            # folder for calculator
|   │   ├── Commands                          # folder with concret commands
│   │   └── calculator.css                    # styles for calculator
│   │   └── Client.js                         # work with DOM
│   │   └── Invoker.js                        # invoke inner logic
│   │   └── Receiver.js                       # inner calculator's logic
│   │   └── utilits.js                        # math functions
│   ├── css                                   # folder with globals styles
│   │   └── normalize.css                     # file for CSS reset
│   │   └── style.css                         # global styles file
│   ├── Theme                                 # folder for Themes Manager
│   │   └── allThemes.js                      # style database
│   │   └── theme.css                         # slyles for Themes Manager
│   │   └── Theme.js                          # script for Themes Manager
│   ├── index.js                              # main script
│   ├── main.css                              # main style file
└── .editorconfig
└── .gitignore
└── .prettierrc.js
└── babel.config.js
└── Command.tets.js                           # Tests for math functions
└── eslint.config.mjs
└── index.html                                # main html-file
└── jest.config.js
└── package-lock.json
└── package.json
└── README.md
└── webpack.congig.js
```
