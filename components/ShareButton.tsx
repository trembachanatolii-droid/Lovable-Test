import React, { useState, useEffect } from 'react';

interface ShareButtonProps {
  title: string;
  text?: string;
  url: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  title,
  text = '',
  url,
  className = ''
}) => {
  const [isShareSupported, setIsShareSupported] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    // Check if Web Share API is available
    setIsShareSupported(
      typeof navigator !== 'undefined' &&
      typeof navigator.share === 'function'
    );
  }, []);

  const handleShare = async () => {
    const shareData = {
      title,
      text: text || title,
      url,
    };

    if (isShareSupported) {
      // Use native share on mobile
      try {
        await navigator.share(shareData);
        showNotification('Shared successfully!');
      } catch (error: unknown) {
        // User cancelled the share or error occurred
        if (error instanceof Error && error.name !== 'AbortError') {
          if (import.meta.env.DEV) {
            console.error('Error sharing:', error);
          }
          // Fall back to copy on error
          copyToClipboard();
        }
      }
    } else {
      // Fall back to copy to clipboard on desktop
      copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      showNotification('Link copied to clipboard!');
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Failed to copy:', error);
      }
      // Fallback for older browsers
      fallbackCopyToClipboard();
    }
  };

  const fallbackCopyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = url;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      showNotification('Link copied to clipboard!');
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Fallback: Failed to copy', error);
      }
      showNotification('Failed to copy link');
    }

    document.body.removeChild(textArea);
  };

  const showNotification = (message: string) => {
    setFeedbackMessage(message);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 3000);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm font-roboto font-bold text-sm uppercase tracking-wider transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
        style={{
          backgroundColor: '#E6F7F2',
          color: '#3FBB94',
          border: '2px solid transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#3FBB94';
          e.currentTarget.style.color = '#FFFFFF';
          e.currentTarget.style.borderColor = '#3FBB94';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#E6F7F2';
          e.currentTarget.style.color = '#3FBB94';
          e.currentTarget.style.borderColor = 'transparent';
        }}
        aria-label={isShareSupported ? 'Share article' : 'Copy article link'}
      >
        {isShareSupported ? (
          <>
            {/* Share Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            Share
          </>
        ) : (
          <>
            {/* Copy Link Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
            Copy Link
          </>
        )}
      </button>

      {/* Feedback Toast */}
      {showFeedback && (
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-2 px-4 py-2 rounded-sm whitespace-nowrap text-sm font-roboto font-medium shadow-lg animate-fade-in z-50"
          style={{
            backgroundColor: '#012169',
            color: '#FFFFFF',
            top: '100%',
          }}
          role="status"
          aria-live="polite"
        >
          {feedbackMessage}
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ShareButton;
