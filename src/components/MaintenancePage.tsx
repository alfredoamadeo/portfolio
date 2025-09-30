import { motion } from "framer-motion";
import { Card, Text, Button, Stack, Box, Container, Center } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { PortfolioPaths } from "../types/paths";

export function MaintenancePage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(PortfolioPaths.ROOT);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container size="sm">
        <Center>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card
              shadow="xl"
              padding="xl"
              radius="lg"
              style={{
                maxWidth: "400px",
                width: "100%",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Stack align="center" gap="xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                >
                  <Box
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                    }}
                  >
                    <IconLock size={40} color="white" />
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Text
                    size="xl"
                    fw={700}
                    ta="center"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Confidentiality Notice
                  </Text>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Text size="md" c="dimmed" ta="center" style={{ lineHeight: 1.6 }}>
                    This page is currently under maintenance or contains confidential information.
                    Please check back later.
                  </Text>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button
                    onClick={handleGoHome}
                    size="md"
                    radius="md"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                      transition: "all 0.3s ease",
                    }}
                    styles={{
                      root: {
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
                        },
                      },
                    }}
                  >
                    Go Back Home
                  </Button>
                </motion.div>
              </Stack>
            </Card>
          </motion.div>
        </Center>
      </Container>
    </Box>
  );
}
