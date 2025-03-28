"use client";

import { Button, Flex, Text, TextInput, Group, ActionIcon } from "@mantine/core";

interface HeaderProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  currentTime: number;
}

export default function Header({ isPlaying, onPlay, onPause, currentTime }: HeaderProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      p="xs"
      h="100%"
      style={{
        borderBottom: "1px solid #eaeaea",
        backgroundColor: "#ffffff",
        padding: "0 16px",
      }}
    >
      <Flex align="center" gap="md">
        <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0ZM37.668 27.8545L20.5324 38.2963C20.2008 38.5094 19.8164 38.6152 19.4375 38.6152C19.0996 38.6152 18.7617 38.5312 18.4465 38.3633C17.8027 38.0215 17.4062 37.3451 17.4062 36.6152V15.7314C17.4062 15.0016 17.8027 14.3252 18.4465 13.9834C19.0902 13.6416 19.8773 13.6943 20.4758 14.1182L37.6113 24.5602C38.1445 24.9346 38.4652 25.5354 38.4707 26.1807C38.4762 26.8314 38.1609 27.4322 37.668 27.8545Z" fill="#4648F0"/>
        </svg>
        <Text fw={700} fz="lg" style={{ color: "#333" }}>VEED Clone</Text>
      </Flex>

      <Group style={{ display: "flex", gap: "10px" }}>
        <TextInput
          placeholder="Project Name"
          variant="filled"
          style={{
            width: 200,
          }}
          styles={{
            input: {
              backgroundColor: "#f5f5f5",
              border: "none",
              fontSize: "14px"
            }
          }}
        />
        <ActionIcon variant="subtle" size="md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ActionIcon>
        <ActionIcon variant="subtle" size="md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12h14" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ActionIcon>
      </Group>

      <Group style={{ display: "flex", gap: "10px" }}>
        <Text fz="sm" style={{ color: "#666" }}>{formatTime(currentTime)}</Text>
        {isPlaying ? (
          <Button
            variant="outline"
            color="gray"
            onClick={onPause}
            style={{
              padding: "6px 12px",
              borderColor: "#ddd",
              height: "34px",
              fontSize: "13px"
            }}
          >
            Pause
          </Button>
        ) : (
          <Button
            variant="outline"
            color="gray"
            onClick={onPlay}
            style={{
              padding: "6px 12px",
              borderColor: "#ddd",
              height: "34px",
              fontSize: "13px"
            }}
          >
            Play
          </Button>
        )}
        <Button
          variant="filled"
          color="blue"
          style={{
            backgroundColor: "#4648F0",
            height: "34px",
            padding: "0 16px",
            fontSize: "13px"
          }}
        >
          Done
        </Button>
      </Group>
    </Flex>
  );
}
