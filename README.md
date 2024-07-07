Set up a local instance of Appwrite or create an account with Appwrite Cloud.

In your appwrite console create a project and database.

1. Create a collection called "messages" and add the following attributes:
Atrtibute Name	Type	Size
user_id	       string	 50
username	     string	 50
body	         string	 250
2. From your `messages` collection, go to the "settings" --> "Update Permissions" --> "+ Add Role" and select "Any". Give this user type "Create", "Read", "Update" and "Delete" permissions.
Once you've set up your project you should be able to update all necessary env variables. Run your development server to view the output.

![alt text](https://github.com/anil1047/Chatapp/blob/main/Demo1.png)
![alt text](https://github.com/anil1047/Chatapp/blob/main/Demo2.png)
