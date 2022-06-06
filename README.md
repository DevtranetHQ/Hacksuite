## What's this?

This is the full stack app for The Dynamics, built to host hackathons.


### The Dynamics App structure

    .
    ├── ...
    └── pages
        ├── api                                                 # api's
        ├── [userId]                                            # profile
        │   └── index.tsx
        ├── scrapbook                                           # scrapbook
        │   └── index.js
        ├── projects                                            # projects
        │   ├── index.tsx
        │   └── preview
        │       └── [projectId].tsx
        ├── events                                              # events
        │   ├── index.js
        │   └── [eventId].js
        ├── workshop                                            # workshops
        │   ├── index.js
        │   └── [workshopId].js
        ├── newsfeed                                            # newsfeed
        │   ├── index.tsx
        │   ├── jobs.tsx
        │   ├── people.tsx
        │   └── projects.tsx
        ├── app                                                 # user dashboard, other pages after signed in
        │   ├── _middleware.js
        │   ├── complete.tsx
        │   ├── create-event.js
        │   ├── create-project.js
        │   ├── index.js
        │   ├── members.js
        │   ├── notifications.tsx
        │   ├── optional-profile.tsx
        │   ├── personal-projects.js
        │   ├── profile.js
        │   ├── settings.tsx
        │   ├── statistics.js
        │   └── tickets.js
        ├── 404.js
        ├── _app.tsx
        ├── discord.js
        ├── email-verification.js
        ├── forgot-password.js
        ├── index.js
        ├── login.js
        ├── logout.tsx
        ├── reset-password.js
        └── signup.js
