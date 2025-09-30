import {
  Stack,
  Title,
  Text,
  Group,
  Card,
  Box,
  SimpleGrid,
  Anchor,
} from '@mantine/core';
import {
  IconMail,
  IconPhone,
  IconMapPin,
} from '@tabler/icons-react';
import { profileData } from '../../config/profile';
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export function Contact() {
  return (
    <Stack gap="xl">
      <Box>
        <Title order={1} size="h2" mb="md">
          Contact
        </Title>
        <Text size="lg" c="dimmed" mb="lg">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </Text>
      </Box>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        {/* Map showing the address location */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={3} size="h4" mb="md">
            Location
          </Title>
          <Box style={{ height: '300px', width: '100%' }}>
            <Map
              mapboxAccessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
              longitude={profileData.contacts[2].longitude!}
              latitude={profileData.contacts[2].latitude!}
              zoom={10}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              style={{ width: '100%', height: '100%' }}
            >
              <Marker 
                longitude={profileData.contacts[2].longitude!} 
                latitude={profileData.contacts[2].latitude!}
              >
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: 'red', 
                  borderRadius: '50%',
                  border: '2px solid white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }} />
              </Marker>
            </Map>
          </Box>
          <Text size="sm" mt="sm" c="dimmed">
            {profileData.contacts[2].content}
          </Text>
        </Card>
        {/* Contact Information */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={3} size="h4" mb="md">
            Contact Information
          </Title>
          <Stack gap="lg">
            {profileData.contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Group key={index} gap="md">
                  <IconComponent size={20} />
                  <Box>
                    <Text fw={500} size="sm">
                      {contact.icon === IconMail ? 'Email' : 
                       contact.icon === IconPhone ? 'Phone' : 
                       contact.icon === IconMapPin ? 'Location' : 'Contact'}
                    </Text>
                    {contact.href ? (
                      <Anchor href={contact.href} size="sm">
                        {contact.content}
                      </Anchor>
                    ) : (
                      <Text size="sm">{contact.content}</Text>
                    )}
                  </Box>
                </Group>
              );
            })}
          </Stack>

          <Box mt="xl">
            <Text fw={500} size="sm" mb="md">
              Response Time
            </Text>
            <Text size="sm" c="dimmed">
              I typically respond to messages within 24 hours. For urgent inquiries,
              please call or send an email with "URGENT" in the subject line.
            </Text>
          </Box>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}