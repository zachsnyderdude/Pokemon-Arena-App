import { Stack } from "expo-router"; // Import the Stack component from expo-router to manage navigation between screens
import * as ScreenOrientation from "expo-screen-orientation"; // Import the ScreenOrientation module so I can keep it in landscape mode
import { useEffect } from "react"; // Import useEffect to lock the screen orientation when the app loads

export function RootLayout() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE); // Lock the screen orientation to landscape mode when the app loads
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide the header for all screens in the stack
      }}
    />
  );
}

export default RootLayout;
