## Coding Style

- Please use Prettier if possible, as Prettier configuration settings have already been enabled.
- When writing comments, please use the following format: `// Make sure there's a space before a comment and that the first letter is uppercase`
- All icons are stored inside `./components/icons` for the time being. To create a new icon, create a new file with the icon name and copy + paste one of the other icon files inside this new file and replace content as needed.

## Dev Notes

- TODO: Replace SVG icons with either icons from "@iconfiy/react" or without library
- TODO: Update links when done
- TODO: Somehow store whether user is logged in or not - currently, we're simply using default true or false for different pages and also `?ref=dash`. If they're logged in, `getServerSideProps()` should also return their name, image, etc.
- TODO: `getServerSideProps()` for every page should return something like:

```json
// Not logged in
{
    "loggedIn": false
}

{
    "loggedIn": {
        "admin": true,
        "name": "<profile name>",
        "image": "<profile image>",
        "unread": true
    }
}
```

- TODO: If not dealing with dates locally before updated in database (i.e. date is not string in database), dates will have to be converted when retrieving from database
- TODO: Replace icon folder with library
