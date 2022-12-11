## Criar projeto por comando
- npx create-expo-app -t expo-template-blank-typescript

## Abrir emulador android
No terminal da pasta do projeto
- npm start

## Instalar uma biblioteca para trazer uma animacao de loading
- npm i react-native-circular-progress
#### Caso de algum erro, é necessario fazer o download das depencencias dessa library
- npm i --save react-native-circular-progress react-native-svg
- npx expo install react-native-svg@12.3.0 -> recomentado pelo expo

# HELP - DESK
- npm i
- npx expo start -c
- npm i @react-native-firebase/app --force -> percistir os dados
- npm i @react-native-firebase/auth --force -> autenticacao

# TODO APP
- npm i -g expo-cli
- npm expo init todo-app
- npm i react-native-paper react-native-reanimated lottie-react-native
- npm start
- npm run android
- npx expo start -c
- npm i react-native-uuid
### Navigation inside APP
- https://reactnavigation.org/docs/getting-started
- Follow doc to install libs
- npm install @react-navigation/native
- npm install react-native-screens react-native-safe-area-context
- <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
- *Hello Navigation*
- npm install @react-navigation/native-stack
- *AsyncStorage*
- npx expo install @react-native-async-storage/async-storage
