import { Avatar, Typography, Box, Button } from "@mui/material";
import ProfilePic from "../../public/profile-pic.png";

const buttonLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jessica-randall",
  },
  {
    label: "Frontend Mentor",
    href: "https://www.frontendmentor.io/profile/jessica-randall",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jessica-randall-1234567890/",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/jessica_randall",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jessica_randall/",
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Card */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "384px",
          height: "100%",
          maxHeight: "640px",
          bgcolor: "secondary.main",
          justifyContent: "center",
          borderRadius: "12px",
        }}
        className='spacing-300'
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            width: "100%",
          }}
        >
          <Avatar src={ProfilePic.src} sx={{ width: 100, height: 100 }} />

          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <Typography variant='preset1'>Jessica Randall</Typography>
            <Typography variant='preset2Bold' sx={{ color: "primary.main" }}>
              London, United Kingdom
            </Typography>
          </Box>

          <Typography variant='preset2' sx={{ color: "text.primary" }}>
            "Front-end developer and avid reader"
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "column", width: "100%", gap: "16px" }}
            className='spacing-200'
          >
            {buttonLinks.map((link, index) => (
              <Button
                variant='text'
                sx={{
                  width: "100%",
                  bgcolor: "secondary.light",
                  borderRadius: "8px",
                  minHeight: "45px",
                  "&:hover": {
                    scale: 1.05,
                    transition: "scale 0.2s ease-in-out",
                    cursor: "pointer",
                    bgcolor: "primary.main",
                  },
                }}
                href={link.href}
                key={index}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Visit ${link.label} profile`}
                tabIndex={0}
              >
                <Typography
                  variant='preset2Bold'
                  sx={{
                    color: "text.primary",
                    textTransform: "none",
                    ".MuiButton-root:hover &": {
                      color: "black",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
