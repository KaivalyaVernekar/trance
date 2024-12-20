import Image from "next/image";
import Link from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 100px)",
        bg: "black",
        paddingX: "5px",
        color: "gray",
      }}
    >
      <Box sx={{ paddingY: "20px", height: "100%" }}>
        <Box sx={{ width: "120px", marginBottom: "20px", paddingX: "20px" }}>
          <Image src="/trance.svg" height={60} width={120} />
        </Box>
        <Box sx={{ marginBottom: "40px" }}>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem
                key={`menu-${menu.name}`}
                sx={{ paddingX: "20px", fontSize: "16px" }}
              >
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        sx={{ color: "white", marginRight: "20px" }}
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem
                key={`menu-${menu.name}`}
                sx={{ paddingX: "20px", fontSize: "16px" }}
              >
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        sx={{ color: "white", marginRight: "20px" }}
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ color: "gray.800", marginY: "20px" }} />

        <Box sx={{ height: "52%", overflowY: "auto", paddingY: "20px" }}>
          <List spacing={2}>
            {playlists.map((list) => (
              <ListItem key={list} sx={{ paddingX: "20px", fontSize: "16px" }}>
                <LinkBox>
                  <Link href="/" passHref>
                    <LinkOverlay>{list}</LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
