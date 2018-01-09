Community Sass Files
===

These sass files are used by the Community Team to style the various Community products like Forum, Developer/Partner Profile, Documentation.

> **Do not use. Work in progress**

## Usage

- Download the latest release (release.zip)
- Unpack this in your styles folder. Path should be theme\styles\sass\community
- Include the community in your custom.scss by adding:

```scss
@import ..\community\helpers
```

In the top! This is important, as the rest of the custom styling will use a great deal of helpers and extends.

## Updating

- Download the latest release (release.zip)
- Remove the theme\styles\sass\community folder and replace it by the one in the zip file

Updating these files should not break, check the release notes for any breaking changes (this can be in terms of changing variable names etcetera)

## Prerequisites

### Font

- We use **Open Sans** as the base font for these tools. Please add the following stylesheet to your HTML:

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,300,600,700" rel="stylesheet" type="text/css"/>
```

## License

The MIT License (MIT)

Copyright (c) 2018 J.W. Lagendijk <jelte.lagendijk@mendix.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
