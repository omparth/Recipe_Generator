# Quick Start Guide

Get the Smart Ingredient Recipe Generator running in 5 minutes!

## Step 1: Get a Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com)
2. Sign in with your Google account
3. Click **"Get API Key"** in the left sidebar
4. Click **"Create new API key"**
5. Copy the generated API key

## Step 2: Create Environment File

Create a `.env` file in the project root:

```bash
EXPO_PUBLIC_GEMINI_API_KEY=paste_your_api_key_here
```

Replace `paste_your_api_key_here` with your actual API key from Step 1.

## Step 3: Install Dependencies

```bash
pnpm install
```

Or with npm:
```bash
npm install
```

## Step 4: Start the App

```bash
pnpm start
```

This will start the Expo development server and display a QR code.

## Step 5: Run on Your Device or Simulator

### Option A: Scan QR Code (Easiest)
1. Install **Expo Go** app on your iOS/Android phone
2. Scan the QR code displayed in your terminal
3. The app will open on your device

### Option B: Android Emulator
```bash
pnpm android
```

### Option C: iOS Simulator (macOS only)
```bash
pnpm ios
```

## Step 6: Try It Out!

The app comes with a default example: **"chicken, broccoli, soy sauce, rice"**

1. Tap **"Generate Recipe"** to create a recipe
2. Watch as the AI generates a recipe using only those ingredients
3. Try different ingredients:
   - `pasta, tomato, garlic, basil, olive oil`
   - `beef, potatoes, carrots, onion, beef broth`
   - `salmon, lemon, dill, butter, asparagus`

## Troubleshooting

### "API key is not configured"
- Verify `.env` file exists in the root directory
- Check the API key is spelled correctly
- Restart the development server after adding the key

### "Cannot connect to API"
- Check your internet connection
- Verify the API key is valid at [Google AI Studio](https://aistudio.google.com)
- Try a simpler ingredient list

### Expo Go App Not Working
- Ensure you're on the same WiFi network as your development machine
- Try using a USB cable and tunnel mode: `expo start --tunnel`

## Next Steps

- Modify ingredients in the input field
- Check out the [full README.md](./README.md) for more features
- Explore the codebase in the `src/` directory
- Customize the UI in `src/components/`

## Project Structure (Quick Reference)

```
App.tsx                    ← Entry point
src/
├── screens/HomeScreen.tsx ← Main UI
├── components/            ← UI components
├── services/gemini.ts     ← API integration
├── types/recipe.ts        ← TypeScript types
├── utils/parseRecipe.ts   ← Helper functions
├── constants/prompts.ts   ← AI prompts
```

## Useful Commands

```bash
# Start development server
pnpm start

# Run on Android
pnpm android

# Run on iOS
pnpm ios

# Run on Web (experimental)
pnpm web

# Check for TypeScript errors
pnpm exec tsc --noEmit
```

---

**You're all set! Happy cooking! 🍳**
