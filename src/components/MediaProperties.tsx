"use client";

import { Box, Text, NumberInput, Stack, Divider, Group, Switch } from "@mantine/core";

interface MediaProps {
  media: {
    id: string;
    type: "video" | "image";
    width: number;
    height: number;
    startTime: number;
    endTime: number;
    position: { x: number; y: number };
    size: { width: number; height: number };
  };
  onUpdate: (updates: Partial<MediaProps["media"]>) => void;
}

export default function MediaProperties({ media, onUpdate }: MediaProps) {
  return (
    <Box mt="xl">
      <Divider mb="lg" />

      <Text fw={700} fz="lg" mb="md" style={{ color: "#333" }}>
        Media Properties
      </Text>

      <Stack spacing="xl" style={{ marginBottom: "20px" }}>
        <Box>
          <Text size="sm" mb="xs" fw={500} style={{ color: "#555" }}>
            Dimensions
          </Text>
          <Group style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <NumberInput
              label="Width (px)"
              value={media.size.width}
              onChange={(value) => {
                if (value !== undefined && value !== "") {
                  onUpdate({
                    size: { ...media.size, width: Number(value) }
                  });
                }
              }}
              min={10}
              max={1920}
              step={1}
              styles={{
                wrapper: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "4px",
                  flex: 1
                },
                input: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  fontSize: "14px"
                },
                label: {
                  fontSize: "12px",
                  color: "#666"
                }
              }}
            />
            <NumberInput
              label="Height (px)"
              value={media.size.height}
              onChange={(value) => {
                if (value !== undefined && value !== "") {
                  onUpdate({
                    size: { ...media.size, height: Number(value) }
                  });
                }
              }}
              min={10}
              max={1080}
              step={1}
              styles={{
                wrapper: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "4px",
                  flex: 1
                },
                input: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  fontSize: "14px"
                },
                label: {
                  fontSize: "12px",
                  color: "#666"
                }
              }}
            />
          </Group>
          <Group style={{ marginTop: "8px", display: "flex", justifyContent: "space-between" }}>
            <Text size="xs" c="dimmed">Lock aspect ratio</Text>
            <Switch
              size="xs"
              color="blue"
              styles={{
                track: {
                  backgroundColor: "#e0e0e0",
                  borderColor: "#e0e0e0",
                  cursor: "pointer"
                },
                thumb: {
                  backgroundColor: "#fff",
                  borderColor: "#e0e0e0"
                }
              }}
            />
          </Group>
        </Box>

        <Box>
          <Text size="sm" mb="xs" fw={500} style={{ color: "#555" }}>
            Position
          </Text>
          <Group style={{ display: "flex", gap: "8px" }}>
            <NumberInput
              label="X Position"
              value={media.position.x}
              onChange={(value) => {
                if (value !== undefined && value !== "") {
                  onUpdate({
                    position: { ...media.position, x: Number(value) }
                  });
                }
              }}
              min={0}
              step={1}
              styles={{
                wrapper: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "4px",
                  flex: 1
                },
                input: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  fontSize: "14px"
                },
                label: {
                  fontSize: "12px",
                  color: "#666"
                }
              }}
            />
            <NumberInput
              label="Y Position"
              value={media.position.y}
              onChange={(value) => {
                if (value !== undefined && value !== "") {
                  onUpdate({
                    position: { ...media.position, y: Number(value) }
                  });
                }
              }}
              min={0}
              step={1}
              styles={{
                wrapper: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "4px",
                  flex: 1
                },
                input: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  fontSize: "14px"
                },
                label: {
                  fontSize: "12px",
                  color: "#666"
                }
              }}
            />
          </Group>
        </Box>

        <Box>
          <Text size="sm" mb="xs" fw={500} style={{ color: "#555" }}>
            Timing
          </Text>
          <Group style={{ display: "flex", gap: "8px" }}>
            <NumberInput
              label="Start Time (sec)"
              value={media.startTime}
              onChange={(value) => {
                if (value !== undefined && value !== "") {
                  onUpdate({ startTime: Number(value) });
                }
              }}
              min={0}
              step={0.1}
              precision={1}
              styles={{
                wrapper: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "4px",
                  flex: 1
                },
                input: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  fontSize: "14px"
                },
                label: {
                  fontSize: "12px",
                  color: "#666"
                }
              }}
            />
            <NumberInput
              label="End Time (sec)"
              value={media.endTime}
              onChange={(value) => {
                if (value !== undefined && value !== "") {
                  onUpdate({ endTime: Number(value) });
                }
              }}
              min={0.1}
              step={0.1}
              precision={1}
              styles={{
                wrapper: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "4px",
                  flex: 1
                },
                input: {
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  fontSize: "14px"
                },
                label: {
                  fontSize: "12px",
                  color: "#666"
                }
              }}
            />
          </Group>
        </Box>
      </Stack>
    </Box>
  );
}
