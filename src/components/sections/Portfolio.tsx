import { useState } from 'react';
import {
  Stack,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Group,
  Badge,
  Button,
  Box,
  Anchor,
  Modal,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  IconExternalLink,
  IconBrandGithub,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { projects } from '../../data';
import '@mantine/carousel/styles.css';

export function Portfolio() {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [previewIndex, setPreviewIndex] = useState(0);

  const handleOpenPreview = (images: string[], index: number) => {
    setPreviewImages(images);
    setPreviewIndex(index);
  };

  const handleClosePreview = () => {
    setPreviewImages([]);
    setPreviewIndex(0);
  };

  const handleNextPreview = () => {
    if (previewImages.length === 0) {
      return;
    }

    setPreviewIndex((current) => (current + 1) % previewImages.length);
  };

  const handlePreviousPreview = () => {
    if (previewImages.length === 0) {
      return;
    }

    setPreviewIndex((current) =>
      current === 0 ? previewImages.length - 1 : current - 1,
    );
  };

  return (
    <Stack gap="xl">
      <Box>
        <Title order={1} size="h2" mb="md">
          Portfolio
        </Title>
        <Text size="lg" c="dimmed" mb="lg">
          A collection of my recent projects showcasing my skills and experience
        </Text>
      </Box>

      <Modal
        opened={previewImages.length > 0}
        onClose={handleClosePreview}
        withCloseButton
        centered
        size="lg"
      >
        {previewImages.length > 0 && (
          <Stack gap="md">
            <Image
              src={previewImages[previewIndex]}
              alt="Project preview"
              radius="md"
              fallbackSrc="https://placehold.co/800x450?text=Project+Image"
            />
            {previewImages.length > 1 && (
              <Group justify="space-between">
                <Button
                  variant="subtle"
                  leftSection={<IconChevronLeft size={16} />}
                  onClick={handlePreviousPreview}
                  size="xs"
                >
                  Previous
                </Button>
                <Button
                  variant="subtle"
                  rightSection={<IconChevronRight size={16} />}
                  onClick={handleNextPreview}
                  size="xs"
                >
                  Next
                </Button>
              </Group>
            )}
          </Stack>
        )}
      </Modal>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {projects.map((project) => (
          <Card
            key={project.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            h="100%"
          >
            <Card.Section>
              {project.images.length > 1 ? (
                <Carousel
                  withIndicators
                  emblaOptions={{ loop: true }}
                  plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
                >
                  {project.images.map((src, i) => (
                    <Carousel.Slide key={i}>
                      <Box
                        onClick={() => handleOpenPreview(project.images, i)}
                        style={{ cursor: 'pointer' }}
                      >
                        <Image
                          src={src}
                          height={200}
                          alt={`${project.title} ${i + 1}`}
                          fallbackSrc="https://placehold.co/400x200?text=Project+Image"
                        />
                      </Box>
                    </Carousel.Slide>
                  ))}
                </Carousel>
              ) : (
                <Box
                  onClick={() => handleOpenPreview(project.images, 0)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={project.images[0]}
                    height={200}
                    alt={project.title}
                    fallbackSrc="https://placehold.co/400x200?text=Project+Image"
                  />
                </Box>
              )}
            </Card.Section>

            <Stack gap="md" mt="md" h="100%">
              <Box>
                <Title order={3} size="h4" mb="xs">
                  {project.title}
                </Title>
                <Text size="sm" c="dimmed" lh={1.5}>
                  {project.description}
                </Text>
              </Box>

              <Box>
                <Group gap="xs" mb="md">
                  {project.tags.map((tag) => (
                    <Badge key={tag} size="sm" variant="light" color="violet">
                      {tag}
                    </Badge>
                  ))}
                </Group>
              </Box>

              <Box mt="auto">
                <Group gap="sm">
                  {project.liveUrl && (
                    <Anchor
                      href={project.liveUrl}
                      target="_blank"
                      style={{ textDecoration: 'none', flex: 1 }}
                    >
                      <Button
                        leftSection={<IconExternalLink size={16} />}
                        variant="filled"
                        size="sm"
                        fullWidth
                      >
                        Live Demo
                      </Button>
                    </Anchor>
                  )}
                  {project.codeUrl && (
                    <Anchor
                      href={project.codeUrl}
                      target="_blank"
                      style={{ textDecoration: 'none', flex: 1 }}
                    >
                      <Button
                        leftSection={<IconBrandGithub size={16} />}
                        variant="outline"
                        size="sm"
                        fullWidth
                      >
                        Code
                      </Button>
                    </Anchor>
                  )}
                </Group>
              </Box>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
