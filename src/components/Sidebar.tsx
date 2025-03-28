"use client";

import { Box, Text, Stack, Paper, Flex } from "@mantine/core";
import { useRef } from "react";

interface SidebarProps {
  onAddMedia: (file: File) => void;
}

export default function Sidebar({ onAddMedia }: SidebarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onAddMedia(files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onAddMedia(files[0]);
    }
  };

  return (
    <Stack style={{ height: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text fw={700} fz="xl" style={{ marginBottom: "16px", color: "#333" }}>
        Add Media
      </Text>

      <Paper
        withBorder
        p="md"
        style={{
          borderRadius: "8px",
          borderStyle: "dashed",
          borderWidth: "2px",
          borderColor: "#ddd",
          cursor: "pointer",
          textAlign: "center",
          marginBottom: "20px",
        }}
        onClick={handleUploadClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Flex direction="column" align="center" justify="center" style={{ height: "120px" }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L12 8" stroke="#4648F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11L12 8 15 11" stroke="#4648F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#4648F0" strokeWidth="2"/>
          </svg>
          <Text fw={600} mt="sm">
            Upload a File
          </Text>
          <Text size="sm" c="dimmed">
            Drag & drop a file or click to browse
          </Text>
          <Text size="xs" c="dimmed" mt="xs">
            Import from a link
          </Text>
        </Flex>
      </Paper>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/*,video/*"
      />
    </Stack>
  );
}
