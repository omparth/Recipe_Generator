# Setup Instructions

## Prerequisites
- Node.js v16+ installed
- A Google account for Gemini API
- One of: Expo Go app, Android Studio emulator, or Xcode simulator

## Step 1: Get Your Gemini API Key (Required)

This is the **most important step**. Without it, the app cannot generate recipes.

### Instructions:
1. Open https://aistudio.google.com in your browser
2. Sign in with your Google account
3. Look for the **"Get API Key"** button in the left sidebar
4. Click **"Create new API key"** in the dialog
5. **Copy the generated key** (you won't see it again)
6. Keep this key safe - it's like a password

## Step 2: Clone or Download This Project

If you're downloading from GitHub:
```bash
git clone <repo-url>
cd recipe-generator
```

Or if you already have the files, just navigate to the project directory.

## Step 3: Create the Environment File

Create a file named `.env` in the **root directory** (same level as `App.tsx`):

**File: `.env`**
```
EXPO_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with the key you copied in Step 1.

**Example:**
```
EXPO_PUBLIC_GEMINI_API_KEY=AIzaSyD_j3c9N0K2L3M4N5O6P7Q8R9S0T1U2V3W
```

⚠️ **Important:** 
- Do NOT include quotes around the API key
- Do NOT commit `.env` to version control
- Keep your API key private

## Step 4: Install Dependencies

Open a terminal in the project directory and run:

```bash
pnpm install
```

Or if you don't have pnpm, use npm:
```bash
npm install
```

Or yarn:
```bash
yarn install
```

**Wait for installation to complete** - this may take 2-3 minutes.

## Step 5: Start the Development Server

Once installation is complete, run:

```bash
pnpm start
```

You should see output like:
```
➜  Expo Go
   Scan the QR code above with Expo Go (Android) or the Camera app (iOS)
```

## Step 6: Run on Your Device/Simulator

### Option A: iOS Device or Simulator (Easiest)
1. If running on simulator: Install Xcode on macOS first
2. Press `i` in the terminal to launch iOS simulator
3. The app will automatically load

### Option B: Android Device or Emulator
1. If using emulator: Install Android Studio first
2. Press `a` in the terminal to launch Android emulator
3. The app will automatically load

### Option C: Scan QR Code with Expo Go
1. Install **Expo Go** app from App Store or Google Play
2. Open the app on your physical device
3. Scan the QR code shown in the terminal
4. The app will load on your phone

## Step 7: Test the App

1. The app opens with example ingredients: "chicken, broccoli, soy sauce, rice"
2. Tap **"Generate Recipe"**
3. Watch as it loads and generates a recipe
4. Try different ingredients!

## Troubleshooting

### "API key not set" Error
**Problem:** App crashes when generating recipe
**Solution:** 
- Verify `.env` file exists in project root
- Check the API key is correct (copy from Google AI Studio)
- Restart the dev server after fixing `.env`

### "Cannot connect to API" Error
**Problem:** No internet or API key is invalid
**Solution:**
- Check your internet connection
- Verify the API key at https://aistudio.google.com
- Generate a new API key if needed

### "Failed to connect to development server"
**Problem:** Cannot connect to your computer's dev server
**Solution:**
- Ensure device and computer are on same WiFi network
- Try running with tunnel mode: `expo start --tunnel`
- Restart the dev server

### Port Already in Use
**Problem:** `Port 8081 is already in use`
**Solution:**
```bash
# Kill the process using the port
lsof -i :8081
kill -9 <PID>

# Or specify a different port
expo start --port 8082
```

### TypeScript Errors When Running
**Problem:** Unexpected TypeScript errors
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .expo
pnpm install
pnpm start
```

## Useful Commands During Development

```bash
# Start development server
pnpm start

# Open on iOS simulator
pnpm start
# Then press 'i'

# Open on Android emulator
pnpm start
# Then press 'a'

# Use tunnel mode (better for physical devices)
pnpm start --tunnel

# Type check the code
pnpm exec tsc --noEmit

# Clear all caches
pnpm start --clear
```

## Setting Up on Different Systems

### macOS
- Has built-in iOS simulator support (via Xcode)
- Can also use Android emulator via Android Studio
- Recommended: Use iOS simulator + physical Android device

### Windows
- Use Android emulator via Android Studio
- Or scan QR code with Expo Go on physical device
- iOS development requires macOS

### Linux
- Use Android emulator via Android Studio
- Or scan QR code with Expo Go on physical device
- iOS development requires macOS

## Making Your First App Change

Try changing something to see it reload live:

1. Open `src/screens/HomeScreen.tsx`
2. Change the title text:
   ```typescript
   <Text style={styles.title}>🍕 Your Custom Title</Text>
   ```
3. Save the file
4. Watch it update instantly on your device!

## Next Steps

1. **Try different ingredients**: Explore what recipes you can generate
2. **Read the code**: Check out the well-commented source files
3. **Customize**: Change colors, text, or prompts in `src/constants/prompts.ts`
4. **Build for production**: Use `expo build` for app stores

## Getting Help

1. Check the **README.md** for detailed documentation
2. Visit https://docs.expo.dev for Expo help
3. Visit https://ai.google.dev for Gemini API help
4. Check https://reactnative.dev for React Native documentation

## Common Tips

- **Keep your API key secret** - Treat it like a password
- **Use free tier** - Google gives generous free API usage
- **Test locally first** - Before building for stores
- **Keep `.env` in `.gitignore`** - Never commit it
- **Save frequently** - Auto-save works but manual saves help

---

You're all set! Now you can:
1. Generate recipes with your ingredients
2. Explore the codebase
3. Make your own modifications
4. Share the app with friends

Happy cooking! 🍳
