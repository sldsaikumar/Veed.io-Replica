"use client";

import { Center, Paper, Box } from "@mantine/core";
import { useEffect, useRef } from "react";
import { Rnd } from "react-rnd";

interface MediaItem {
  id: string;
  type: "video" | "image";
  url: string;
  width: number;
  height: number;
  startTime: number;
  endTime: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface CanvasProps {
  mediaItems: MediaItem[];
  selectedMediaId: string | undefined;
  onSelectMedia: (id: string) => void;
  onUpdateMedia: (id: string, updates: Partial<MediaItem>) => void;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
}

export default function Canvas({
  mediaItems,
  selectedMediaId,
  onSelectMedia,
  onUpdateMedia,
  currentTime,
  setCurrentTime,
  isPlaying,
}: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({}); // Store video elements by ID

  useEffect(() => {
    if (isPlaying) {
      let start: number | undefined;

      const animate = (timestamp: number) => {
        if (start === undefined) {
          start = timestamp;
        }

        const elapsed = timestamp - (lastTimeRef.current || timestamp);
        lastTimeRef.current = timestamp;

        // Update time based on elapsed milliseconds
        setCurrentTime((prevTime) => {
          const newTime = prevTime + elapsed / 1000; // Convert ms to seconds
          return newTime;
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      // Play all visible videos
      Object.values(videoRefs.current).forEach((video) => {
        if (video.paused) {
          video.play().catch((err) => console.error("Video play error:", err));
        }
      });

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      // Pause all videos
      Object.values(videoRefs.current).forEach((video) => {
        if (!video.paused) {
          video.pause();
        }
      });

      // Reset the animation frame reference and last time
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = 0;
    }
  }, [isPlaying, setCurrentTime]);

  // Function to render resize handles
  const renderResizeHandles = (isSelected: boolean) => {
    if (!isSelected) return {};

    return {
      bottomRight: (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#4648F0",
            borderRadius: "2px",
            position: "absolute",
            bottom: "-5px",
            right: "-5px",
            cursor: "se-resize",
          }}
        />
      ),
      bottomLeft: (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#4648F0",
            borderRadius: "2px",
            position: "absolute",
            bottom: "-5px",
            left: "-5px",
            cursor: "sw-resize",
          }}
        />
      ),
      topRight: (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#4648F0",
            borderRadius: "2px",
            position: "absolute",
            top: "-5px",
            right: "-5px",
            cursor: "ne-resize",
          }}
        />
      ),
      topLeft: (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#4648F0",
            borderRadius: "2px",
            position: "absolute",
            top: "-5px",
            left: "-5px",
            cursor: "nw-resize",
          }}
        />
      ),
    };
  };

  return (
    <Box style={{ height: "100%", position: "relative" }}>
      <Center style={{ height: "100%", padding: "20px" }}>
        <Paper
          ref={canvasRef}
          shadow="xs"
          style={{
            width: "1280px",
            height: "720px",
            position: "relative",
            backgroundColor: "#000",
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          {mediaItems.map((item) => {
            const isVisible = currentTime >= item.startTime && currentTime <= item.endTime;
            const isSelected = selectedMediaId === item.id;

            if (!isVisible) return null;

            return (
              <Rnd
                key={item.id}
                size={{ width: item.size.width, height: item.size.height }}
                position={{ x: item.position.x, y: item.position.y }}
                onDragStop={(e, d) => {
                  onUpdateMedia(item.id, {
                    position: { x: d.x, y: d.y }
                  });
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                  onUpdateMedia(item.id, {
                    position,
                    size: {
                      width: parseInt(ref.style.width),
                      height: parseInt(ref.style.height)
                    }
                  });
                }}
                onClick={() => onSelectMedia(item.id)}
                style={{
                  outline: isSelected ? "2px solid #4648F0" : "none",
                  zIndex: isSelected ? 10 : 1,
                }}
                resizeHandleComponent={renderResizeHandles(isSelected)}
                minWidth={50}
                minHeight={50}
                bounds="parent"
              >
                {item.type === "video" ? (
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[item.id] = el;
                    }}
                    src={item.url}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    muted
                  />
                ) : (
                  // Using a div wrapper with relative position
                  <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.url}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      alt="Media item"
                    />
                  </div>
                )}
              </Rnd>
            );
          })}
        </Paper>
      </Center>

      {/* Add Media button for empty state */}
      {mediaItems.length === 0 && (
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12h14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Box style={{ color: "#ffffff", marginTop: "16px", fontSize: "18px", fontWeight: 500 }}>
            Add media to this project
          </Box>
        </Box>
      )}
    </Box>
  );
}
