"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import MediaProperties from "./MediaProperties";
import { AppShell, Box, Group, Flex } from "@mantine/core";

export default function EditorPage() {
  const [selectedMedia, setSelectedMedia] = useState<{
    id: string;
    type: "video" | "image";
    file: File | null;
    url: string;
    width: number;
    height: number;
    startTime: number;
    endTime: number;
    position: { x: number; y: number };
    size: { width: number; height: number };
  } | null>(null);

  const [mediaItems, setMediaItems] = useState<Array<{
    id: string;
    type: "video" | "image";
    file: File | null;
    url: string;
    width: number;
    height: number;
    startTime: number;
    endTime: number;
    position: { x: number; y: number };
    size: { width: number; height: number };
  }>>([]);

  const [currentTime, setCurrentTime] = useState<number>(0); // Fixed the type here
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAddMedia = (file: File) => {
    const id = `media-${Date.now()}`;
    const isVideo = file.type.includes('video');
    const isImage = file.type.includes('image');

    if (!isVideo && !isImage) {
      alert('Please upload a video or image file.');
      return;
    }

    const newMedia = {
      id,
      type: isVideo ? 'video' as const : 'image' as const,
      file,
      url: URL.createObjectURL(file),
      width: 320,
      height: 240,
      startTime: 0,
      endTime: isVideo ? 60 : 10, // default 60 seconds for video, 10 for images
      position: { x: 100, y: 100 },
      size: { width: 320, height: 240 },
    };

    setMediaItems(prev => [...prev, newMedia]);
    setSelectedMedia(newMedia);
  };

  const handleMediaSelect = (id: string) => {
    const media = mediaItems.find(item => item.id === id);
    if (media) {
      setSelectedMedia(media);
    }
  };

  const handleUpdateMedia = (id: string, updates: Partial<typeof selectedMedia>) => {
    setMediaItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    );

    if (selectedMedia && selectedMedia.id === id) {
      setSelectedMedia(prev => prev ? { ...prev, ...updates } : prev);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
      padding={0}
      styles={{
        main: {
          backgroundColor: "#f8f9fa",
        },
        header: {
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
        },
        navbar: {
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e0e0e0",
          overflow: "auto",
          padding: "16px",
        }
      }}
    >
      <AppShell.Header>
        <Header
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          currentTime={currentTime}
        />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar onAddMedia={handleAddMedia} />
        {selectedMedia && (
          <MediaProperties
            media={selectedMedia}
            onUpdate={(updates) => handleUpdateMedia(selectedMedia.id, updates)}
          />
        )}
      </AppShell.Navbar>

      <AppShell.Main>
        <Flex
          direction="column"
          style={{
            height: "100%",
            paddingTop: "20px",
            overflow: "hidden"
          }}
        >
          <Box style={{ flex: 1, overflow: "hidden" }}>
            <Canvas
              mediaItems={mediaItems}
              selectedMediaId={selectedMedia?.id}
              onSelectMedia={handleMediaSelect}
              onUpdateMedia={handleUpdateMedia}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              isPlaying={isPlaying}
            />
          </Box>

          <Group
            style={{
              height: "40px",
              borderTop: "1px solid #e0e0e0",
              padding: "0 16px",
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box style={{ fontSize: "14px" }}>
              {currentTime.toFixed(1)}s / {selectedMedia ? selectedMedia.endTime.toFixed(1) : "0.0"}s
            </Box>
          </Group>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}
