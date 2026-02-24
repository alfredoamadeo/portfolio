import { type FormEvent } from 'react';
import {
  Stack,
  Title,
  Text,
  Group,
  Card,
  Box,
  SimpleGrid,
  Anchor,
  TextInput,
  Textarea,
  Button,
  ActionIcon,
} from '@mantine/core';
import { IconMail, IconSend } from '@tabler/icons-react';
import { profileData } from '../../config/profile';

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    const firstNameValue = typeof firstName === 'string' ? firstName : '';
    const lastNameValue = typeof lastName === 'string' ? lastName : '';
    const emailValue = typeof email === 'string' ? email : '';
    const messageValue = typeof message === 'string' ? message : '';

    const subject = 'Portfolio contact';
    const bodyLines = [
      `Name: ${`${firstNameValue} ${lastNameValue}`.trim()}`,
      `Email: ${emailValue}`,
      '',
      messageValue,
    ];

    const body = bodyLines.join('\n');

    window.location.href = `mailto:${profileData.contacts[0].content}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Stack gap="xl">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="lg" style={{ height: '100%' }}>
            <Box>
              <Title order={1} size="h3" mb="md">
                Get in Touch
              </Title>
              <Text size="md" mb="xs">
                I'd like to hear from you!
              </Text>
              <Text size="sm" c="dimmed" mb="lg">
                If you have any inquiries or just want to say hi, please use the contact form.
              </Text>
            </Box>

            <Group gap="md" align="flex-start">
              <IconMail size={20} />
              <Box>
                <Text fw={500} size="sm">
                  Email
                </Text>
                <Anchor href={profileData.contacts[0].href} size="sm">
                  {profileData.contacts[0].content}
                </Anchor>
              </Box>
            </Group>

            <Box style={{ marginTop: "25%" }}>
              <Text fw={500} size="md" mb="sm">
                Social Media
              </Text>

              <Group justify="left" gap="md">
                {profileData.socials.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <ActionIcon
                      key={social.href}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      radius="xl"
                      size="lg"
                    >
                      <SocialIcon size={18} />
                    </ActionIcon>
                  );
                })}
              </Group>
            </Box>
          </Stack>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={3} size="h4" mb="md">
            Contact Form
          </Title>
          <Box component="form" onSubmit={handleSubmit}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mb="md">
              <TextInput label="First Name" name="firstName" placeholder="First Name" />
              <TextInput label="Last Name" name="lastName" placeholder="Last Name" />
            </SimpleGrid>

            <TextInput
              label="Email"
              name="email"
              placeholder="email@example.com"
              type="email"
              required
              mb="md"
            />

            <Textarea
              label="Message"
              name="message"
              placeholder="Write your message here..."
              minRows={4}
              autosize
              mb="md"
            />

            <Group justify="flex-end">
              <Button type="submit" radius="xs" variant="filled" >
                <IconSend size={16} style={{ marginRight: "8px" }} />
                Send
              </Button>
            </Group>
          </Box>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}