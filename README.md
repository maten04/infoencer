**INFO**

**_Welcome to my project!_**

The goal of this site it to be a place where streamers, influencers and others can create accounts and show everyone in one nice place all their content

**TODOS**:

**Frontend**:

- General:
  - Every page will have a navbar

- NAVBAR:
  - Site name
  - User settings

- Search page:
  - Searchbar:
    - Input box
    - Platform option

  - List of found users

- Home page:
  - Welcome message
  - Additional info

- Profile page:
  - Big account image
  - Buttons to navigate to the user's media options

- Social page: 
  - Big social account info
  - Username
  - Followers/subscribers count
  - Assets (shows all the assets of a user and can filter)

**Backend**:

- Users:
  - Description
    This will represent our different users in our system

  - Data
    - id <number> (automatically generated)
    - usename <string>
    - password <string>
    - email <string>
    - phoneNumber (optional) <string>
    - profilePicture <string> (for now, manually hardcodedly save into our program)
    - socials <Socials[]>
    - admin <boolean> (can only be set in the db directly)

  - REST calls
    - Add user
    - Get all users
    - Get spesific user
    - Get all socials of user
    - Update user
    - Delete user

- Socials:
  - Description
    This will represent our different social media options that each user has

  - Data
    - id <number> (automatically generated)
    - type <string>
    - username <string>
    - userId <number> (will be connected to the user that has this social media)
    - assets <number[]> (list of assets id)

  - REST calls
    - Add new type to a user
    - Add new asset to social
    - Get all users with type
    - Get all social assets
    - Delete type from a user

- Assets:
  - Description
    This will represent the assets that each social uses (that the user wants to show) such as emotes, overlays, models, etc.

  - Data 
    - id <number> (automatically generated)
    - type <string> (layout, emote, model, etc.)
    - image <string>
    - socialId <number> (connected to the social it's connected to)

  - REST calls
    - Add new asset
    - Remove asset