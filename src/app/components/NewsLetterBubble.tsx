'use client';
import { useEffect, useState } from 'react';
import { Modal, Box, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function NewsletterBubble() {
    const [open, setOpen] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);
    const [iframeLoading, setIframeLoading] = useState(true);

    // Hint bubble periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimateOut(false);
            setShowHint(true);

            const animateTimer = setTimeout(() => setAnimateOut(true), 3000);
            const hideTimer = setTimeout(() => setShowHint(false), 4000);

            return () => {
                clearTimeout(animateTimer);
                clearTimeout(hideTimer);
            };
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Custom CSS for bubble animations */}
            <style>{`
                @keyframes slide-bubble-in {
                    0% { opacity: 0; transform: translateX(20px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes slide-bubble-out {
                    0% { opacity: 1; transform: translateX(0); }
                    100% { opacity: 0; transform: translateX(20px); }
                }
                @keyframes bubble-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                .animate-slide-bubble-in { animation: slide-bubble-in 0.5s ease-out forwards; }
                .animate-slide-bubble-out { animation: slide-bubble-out 0.5s ease-in forwards; }
                .animate-bubble-pulse { animation: bubble-pulse 3s ease-in-out infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .animate-slide-bubble-in,
                    .animate-slide-bubble-out,
                    .animate-bubble-pulse { animation: none !important; }
                }
            `}</style>

            {/* Sliding hint bubble */}
            {showHint && !open && (
                <div
                    className={`fixed bottom-7 right-17 z-50 flex items-center space-x-2
                        ${animateOut ? 'animate-slide-bubble-out' : 'animate-slide-bubble-in'}`}
                >
                    <div className="bg-white text-gray-800 text-xs px-2 py-2 rounded-xl shadow-md">
                        Subscribe to my newsletter!
                    </div>
                </div>
            )}

            {/* Bubble button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#fc1eba] text-white text-xl shadow-lg 
                   animate-bubble-pulse hover:scale-105 transition-transform flex items-center justify-center"
                aria-label="Subscribe to newsletter"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                >
                    <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/>
                </svg>
            </button>

            {/* MUI Modal */}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="newsletter-modal"
                aria-describedby="newsletter-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', sm: 400 },
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        maxHeight: '90vh',
                        overflow: 'auto',
                    }}
                >
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <h4 id="newsletter-modal" className="mb-4 text-lg font-medium">
                        Subscribe to my newsletter
                    </h4>

                    {iframeLoading && (
                        <div className="flex justify-center py-6">
                            <CircularProgress sx={{ color: '#fc1eba' }} />
                        </div>
                    )}
                   {/* subscribe form goes here */}
                </Box>
            </Modal>
        </>
    );
}
