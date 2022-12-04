# How to Deploy 
This application is built on the Expo React Native Framework. The following deployment steps use Expo's cli tools for deployment. Steps taken from [expo's "creating your first build" webpage](https://docs.expo.dev/build/setup/)

1. Clone the **NatureSoundApp** source code to your computer via the command `git clone https://github.com/standeraumich/NatureSoundApp.git`
2. With a terminal opened and at the location of the `NatureSoundApp` folder, run `npm install -g eas-cli`
3. If have not made an account, go to [expo.dev](https://expo.dev/signup) and create a free account
4. After `eas-cli` has been installed, in your terminal run `eas login`
5. Input your account credentials 
6. Run `eas build:configure` and follow the prompted steps to deploy to either Android or iOS (or both)
7. Your deployment will build over expo's servers and the terminal will notify you when it is finished and give you a download link 
