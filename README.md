The goal of this site it to be a place where streamers, influencers and others can create accounts and show everyone in one nice place all their content

TODOS:

Frontend:
- General:
    * Every page will have a navbar and searchbar

- NAVBAR:
    * Site name
    * User settings
    
- Searchbar: 
    * Input box
    * Platform option

- Home page:
    * Welcome message
    * Additional info

- Profile page:
    * Big account image
    * Buttons to navigate to the user's media options

Backend:
- Users:
    * Description
        This will represent our different users in our system

    * Data
        - Id <number> (automatically generated)
        - Usename <string>
        - Password <string>
        - Email <string>
        - Phone number (optional) <number>
        - Profile picture <string> (for now, manually hardcodedly save into our program)
        - List of socials <Socials[]>
        - Admin <boolean> (can only be set in the db directly)

    * REST calls
        - Add user
        - Get all users
        - Get spesific user
        - Get all socials of user
        - Update user
        - Delete user

- Socials:
    * Description
        This will represent our different social media options that each user has

    * Data
        - Id <number> (automatically generated)
        - Type <string>
        - Username <string>
        - User id <number> (will be connected to the user that has this social media)

    * REST calls
        - Add new type to a user
        - Get all users with type
        - Delete type from a user
