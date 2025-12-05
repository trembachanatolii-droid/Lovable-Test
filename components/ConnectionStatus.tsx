import React, { useState, useEffect } from 'react';

// Network Information API types
interface NetworkInformation extends EventTarget {
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
  addEventListener(type: 'change', listener: () => void): void;
  removeEventListener(type: 'change', listener: () => void): void;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
}

interface ToastState {
  visible: boolean;
  message: string;
  type: 'offline' | 'online' | 'slow';
}

const ConnectionStatus: React.FC = () => {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: '',
    type: 'online'
  });
  const [connectionQuality, setConnectionQuality] = useState<string | null>(null);

  useEffect(() => {
    // Get Network Information API if available
    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    // Handler for online event
    const handleOnline = () => {
      setToast({
        visible: true,
        message: 'You are back online',
        type: 'online'
      });

      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        setToast(prev => ({ ...prev, visible: false }));
      }, 3000);
    };

    // Handler for offline event
    const handleOffline = () => {
      setToast({
        visible: true,
        message: 'You are offline. Some features may be unavailable.',
        type: 'offline'
      });

      // Don't auto-dismiss offline notifications
    };

    // Handler for connection quality changes
    const handleConnectionChange = () => {
      if (connection && connection.effectiveType) {
        const effectiveType = connection.effectiveType;
        setConnectionQuality(effectiveType);

        // Show warning for slow connections
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          setToast({
            visible: true,
            message: 'Slow connection detected. Content may load slowly.',
            type: 'slow'
          });

          setTimeout(() => {
            setToast(prev => ({ ...prev, visible: false }));
          }, 4000);
        }
      }
    };

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Monitor connection quality if available
    if (connection) {
      connection.addEventListener('change', handleConnectionChange);
      // Set initial quality
      handleConnectionChange();
    }

    // Check initial online status
    if (!navigator.onLine) {
      handleOffline();
    }

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (connection) {
        connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, []);

  // Don't render if no toast to show
  if (!toast.visible) {
    return null;
  }

  // Determine colors based on toast type
  const getToastStyles = () => {
    switch (toast.type) {
      case 'offline':
        return {
          backgroundColor: '#DC2626',
          borderColor: '#991B1B',
          icon: '⚠️'
        };
      case 'online':
        return {
          backgroundColor: '#059669',
          borderColor: '#047857',
          icon: '✓'
        };
      case 'slow':
        return {
          backgroundColor: '#F59E0B',
          borderColor: '#D97706',
          icon: '⏳'
        };
      default:
        return {
          backgroundColor: '#3B82F6',
          borderColor: '#2563EB',
          icon: 'ℹ️'
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        maxWidth: '90%',
        width: '400px',
        padding: '16px 20px',
        backgroundColor: styles.backgroundColor,
        color: 'var(--white)',
        borderRadius: '8px',
        border: `2px solid ${styles.borderColor}`,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 0 6px 12px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '15px',
        fontWeight: '500',
        lineHeight: '1.5',
        animation: 'slideUp 0.3s ease-out',
        // Ensure it works on iOS with safe areas
        paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
      }}
    >
      <span
        style={{
          fontSize: '20px',
          flexShrink: 0
        }}
        aria-hidden="true"
      >
        {styles.icon}
      </span>

      <span style={{ flex: 1 }}>
        {toast.message}
      </span>

      {/* Optional: Show connection quality badge */}
      {connectionQuality && toast.type === 'slow' && (
        <span
          style={{
            padding: '4px 8px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          {connectionQuality}
        </span>
      )}

      {/* Close button for offline notifications */}
      {toast.type === 'offline' && (
        <button
          onClick={() => setToast(prev => ({ ...prev, visible: false }))}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--white)',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '4px 8px',
            marginLeft: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          aria-label="Dismiss notification"
        >
          ×
        </button>
      )}

      {/* Inline keyframe animation */}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }

        /* Mobile optimization */
        @media (max-width: 640px) {
          [role="status"] {
            bottom: 10px !important;
            max-width: calc(100% - 20px) !important;
            font-size: 14px !important;
          }
        }

        /* Ensure it appears above all other content */
        @supports (backdrop-filter: blur(10px)) {
          [role="status"] {
            backdrop-filter: blur(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default ConnectionStatus;
