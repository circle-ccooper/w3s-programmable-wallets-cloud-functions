# w3s-programmable-wallets-cloud-functions
Here is a few cloud functions for secure dev controlled wallet set and wallet creation with dynamic ciphertext integration

# Clone the GitHub Repository:

Open your terminal or command prompt.
Navigate to the directory where you want to clone the repository using the cd command.
Run the following command to clone the repository:
```bash
git clone <repository_url>
```
Replace <repository_url> with the actual URL of the GitHub repository containing the Cloud Functions code.
Navigate into the cloned repository directory using the cd command.

# Set Up Firebase:

Install the Firebase CLI globally on your machine if you haven’t already:
```bash
npm install -g firebase-tools
```

Log in to your Firebase account:
```bash
firebase login
```
Follow the prompts to log in via your web browser.
Initialize Firebase in the repository’s directory:
```bash
firebase init functions
```
This command initializes the functions directory and sets up the necessary configuration files.
Copy Cloud Functions Code:
If the GitHub repository’s structure includes a functions directory with the Cloud Functions code, copy the contents of that directory into your local functions directory. If there are multiple files or subdirectories, make sure to maintain the structure.

# Deploy Cloud Functions:

After copying the code, navigate to the functions directory:
```bash
cd functions
```

Deploy the Cloud Functions to Firebase:
```bash
firebase deploy --only functions
```
This command packages and deploys the Cloud Functions to your Firebase project.

# Test Deployed Functions:

Once the deployment is successful, Firebase will provide URLs for the deployed Cloud Functions. You can find these URLs in the terminal output.

To test the functions, you can use tools like curl, Postman, or access the URLs in a web browser. Make sure you send valid requests according to the function’s expected input.
