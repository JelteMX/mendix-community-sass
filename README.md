Community Sass Files
===

These sass files are used by the Community Team to style the various Community products like Forum, Developer/Partner Profile, Documentation. This is work in progress

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

## License
