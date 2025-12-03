/**
 * Trigger haptic feedback on mobile devices
 * Uses the Vibration API with appropriate fallback
 */
export function triggerHaptic(type: 'light' | 'medium' | 'heavy' | 'success' | 'error' = 'light') {
  if (!('vibrate' in navigator)) return;

  const patterns = {
    light: [10],
    medium: [20],
    heavy: [30],
    success: [10, 50, 10],
    error: [50, 100, 50]
  };

  try {
    navigator.vibrate(patterns[type]);
  } catch (e) {
    // Silently fail if vibration not allowed
  }
}
