import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Box, BreadcrumbSeparator, HStack } from "@chakra-ui/react";
// import { CallTracker } from "assert";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:example@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
  {
    icon: faTwitterSquare,
    url: "https://twitter.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        // scrolling down
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        // scrolling up
        headerRef.current.style.transform = "translateY(0)";
      }

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const aStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="white">
      <Box color="black" maxWidth="1280px" margin="0 auto">
        <HStack
          px={50}
          py={2}
          justifyContent="space-between"
          alignItems="center">
          <nav>
            <HStack spacing={8}>
              {socials.map((item, index) => {
                return (
                  <a key={index} href={item.url}>
                    <FontAwesomeIcon size="lg" icon={item.icon} />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a style={aStyle} onClick={handleClick("projects")}>
                Projects
              </a>
              <a style={aStyle} onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
