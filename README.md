# Smart Ingredient Recipe Generator

A React Native Expo application that generates AI-powered recipes based on user-provided ingredients. This mobile app leverages the Gemini API to create cooking instructions using only the ingredients you specify.

## Features

- 🎯 **Simple Input** - Enter ingredients separated by commas
- 🤖 **AI-Powered** - Uses Google's Gemini API to generate recipes
- 📝 **Detailed Recipes** - Get recipe title, ingredients list, and step-by-step instructions
- ⚡ **Real-time Generation** - Get instant recipe suggestions
- 📋 **Copy Functionality** - Copy recipes for easy sharing
- 🔄 **Multiple Recipes** - Generate another recipe with the same ingredients
- 🎨 **Modern UI** - Clean, responsive mobile interface
- ⚠️ **Error Handling** - User-friendly error messages and validation
- 🔄 **Pull-to-Refresh** - Refresh the app with a simple swipe

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **AI API**: Google Gemini 1.5 Flash
- **State Management**: React Hooks (useState, useCallback)
- **Styling**: React Native StyleSheet

## Project Structure

```
├── App.tsx                      # App entry point
├── src/
│   ├── screens/
│   │   └── HomeScreen.tsx      # Main screen component
│   ├── components/
│   │   ├── IngredientInput.tsx # Input field for ingredients
│   │   ├── RecipeCard.tsx      # Displays recipe details
│   │   ├── LoadingState.tsx    # Loading indicator
│   │   └── ErrorMessage.tsx    # Error display
│   ├── services/
│   │   └── gemini.ts           # Gemini API integration
│   ├── types/
│   │   └── recipe.ts           # TypeScript interfaces
│   ├── constants/
│   │   └── prompts.ts          # AI prompts and constants
│   └── utils/
│       └── parseRecipe.ts      # Recipe parsing and validation
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript configuration
├── app.json                    # Expo configuration
└── README.md                   # This file
```

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm
- Expo CLI (install globally: `npm install -g expo-cli`)
- A Google Gemini API key

### Setup Steps

1. **Clone the project** (or download the files)

2. **Install dependencies**:
   ```bash
   pnpm install
   ```
   Or with npm:
   ```bash
   npm install
   ```

3. **Get a Gemini API Key**:
   - Go to [Google AI Studio](https://aistudio.google.com)
   - Click "Get API Key" or go to the API Keys section
   - Create a new API key
   - Copy the API key

4. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```
   EXPO_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

   Or set it in your terminal before running the app:
   ```bash
   export EXPO_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

## Expo Setup

Make sure you have Expo installed globally:
```bash
npm install -g expo-cli
```

## Running the App

### Start the Development Server

```bash
pnpm start
```

This will start the Expo development server and display a QR code.

### Running on Android

```bash
pnpm android
```

Or scan the QR code with the Expo Go app on your Android device.

### Running on iOS

```bash
pnpm ios
```

Or scan the QR code with the camera app and tap "Open in Expo Go" on your iOS device.

### Running on Web (Experimental)

```bash
pnpm web
```

## Gemini API Setup

1. Visit [Google AI Studio](https://aistudio.google.com)
2. Sign in with your Google account
3. Click "Get API Key" in the left menu
4. Click "Create new API key"
5. Copy the generated API key
6. Add it to your `.env` file as shown in the Installation section

### API Key Security

⚠️ **Important**: Never commit your `.env` file to version control. The `EXPO_PUBLIC_` prefix means this variable will be exposed in your app, but keep the actual key value private.

## Usage

1. **Launch the app** - The app opens with an example: "chicken, broccoli, soy sauce, rice"
2. **Enter ingredients** - Modify the input or enter your own ingredients separated by commas
3. **Generate Recipe** - Tap the "Generate Recipe" button
4. **View Recipe** - The app displays the recipe title, ingredients list, and instructions
5. **Generate Another** - Use the "Generate Another" button to create a new recipe with the same ingredients
6. **Copy Recipe** - Tap "📋 Copy Recipe" to prepare the recipe for sharing
7. **Clear** - Reset the app with the "Clear" button

### Example Ingredients

- `chicken, rice, garlic, soy sauce, ginger`
- `pasta, tomato, basil, garlic, olive oil`
- `beef, potatoes, carrots, onion, beef broth`
- `salmon, lemon, dill, butter, asparagus`

## Error Handling

The app handles multiple error scenarios:

1. **Empty Input** - Shows an error if no ingredients are entered
2. **Network Errors** - Displays a message if the API request fails
3. **API Errors** - Shows Gemini API errors in a user-friendly format
4. **Invalid Response** - Handles malformed JSON responses from the AI
5. **Missing API Key** - Alerts you to configure the Gemini API key

All errors are displayed in a red error box with a warning emoji for easy visibility.

## Future Improvements

- **Dietary Preferences** - Filter recipes by dietary restrictions (vegan, gluten-free, etc.)
- **Difficulty Levels** - Choose easy, medium, or hard recipes
- **Cooking Time** - Specify time available for cooking
- **Recipe History** - Save favorite recipes locally
- **Share Functionality** - Share recipes via messaging apps
- **Ingredient Images** - Display images for recipes
- **Nutrition Info** - Show estimated nutritional values
- **Voice Input** - Add voice-to-text ingredient entry
- **Multi-language Support** - Support for multiple languages
- **Offline Mode** - Cache recent recipes for offline access
- **Custom Themes** - Light and dark mode support
- **Unit Conversions** - Support for different measurement units

## Troubleshooting

### "Gemini API key is not configured"
- Make sure your `.env` file exists and contains `EXPO_PUBLIC_GEMINI_API_KEY`
- Restart the Expo development server after adding the API key

### "Failed to generate recipe" or "API error"
- Verify your API key is valid at [Google AI Studio](https://aistudio.google.com)
- Check your internet connection
- Ensure the Gemini API is enabled for your project

### App doesn't show the recipe
- Check the console for error messages
- Try with a simpler ingredient list
- Ensure your API key has the necessary permissions

### TextInput showing placeholder on certain devices
- This is a known behavior in React Native
- The placeholder will disappear when you start typing

## Development

### TypeScript

This project is fully typed with TypeScript. Ensure all files follow the typing conventions:

```typescript
// Good
const handlePress = useCallback((ingredients: string): void => {
  // implementation
}, []);

// Make sure to type function parameters and return values
```

### Code Style

- Use functional components with hooks
- Keep components focused and single-responsibility
- Use meaningful variable names
- Add comments for complex logic

### Testing

To test the app:

1. Enter the example ingredients and tap "Generate Recipe"
2. Verify the recipe displays correctly
3. Test the "Generate Another" button
4. Test the error handling by:
   - Entering an empty input
   - Temporarily disabling internet
   - Using an invalid API key

## Performance

- Uses React's `useCallback` for optimized event handlers
- Implements proper loading states to prevent duplicate API calls
- Minimal re-renders through careful state management
- Efficient component composition

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues:

1. Check the [Expo documentation](https://docs.expo.dev)
2. Review the [Gemini API documentation](https://ai.google.dev)
3. Check the console output for error messages
4. Verify all environment variables are set correctly

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

**Happy Cooking! 🍳**
