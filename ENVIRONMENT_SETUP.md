# Environment Setup Guide

## Current Configuration

Your FosterAI application is now configured to use the live Render server for all environments:

### Production Environment
- **API URL**: `https://fosterai-backend.onrender.com/api`
- **Image Base URL**: `https://fosterai-backend.onrender.com`

### Local Development Environment  
- **API URL**: `https://fosterai-backend.onrender.com/api`
- **Image Base URL**: `https://fosterai-backend.onrender.com`

## How It Works

1. **All Environments**: Uses the live Render server
2. **Dynamic Image URLs**: All image URLs automatically use the same base URL as the API
3. **No Local Server Required**: Everything connects to the live backend

## Files Modified

1. **`.env`** - Updated to use production server by default
2. **`.env.local`** - Created for local development (not committed to git)
3. **`src/util/imageConfig.ts`** - New utility for dynamic image URLs
4. **`src/util/apiConfig.ts`** - Updated fallback to production server
5. **Components updated**: Trainer, Teams, Trainees, Intern, Courses - All now use dynamic image URLs

## Commands

- `npm run dev` - Run in development (uses .env.local if present)
- `npm run build` - Build for production (uses .env values)

## Benefits

✅ **Live Server Integration**: Always connects to your production backend
✅ **Consistent Environment**: Same server for development and production
✅ **No Local Setup Required**: No need to run local backend server
✅ **Dynamic Image URLs**: Images load from live server automatically
✅ **Always Up-to-Date**: Uses latest data from production database
