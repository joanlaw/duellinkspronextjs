import React from 'react';
import {
  AppBar,
  Container,
  Spacer,
  Link,
  Text,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';

const CustomNavbar = () => {
  return (
    <AppBar shadow>
      <Container>
        <Navbar>
          <NavbarContent>
            <Row align="center">
              <Col>
                <NavbarBrand>
                  <Link href="/" passHref>
                    <img
                      src="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663790369/iconos%20dlp/ico-d01_kui7ic.png"
                      alt="Logo"
                      style={{ width: '40px', height: '40px' }}
                    />
                  </Link>
                </NavbarBrand>
              </Col>
              <Col>
                <NavbarMenu>
                  <NavbarMenuToggle />
                  <NavbarContent>
                    <NavbarItem>
                      <Link href="/about" passHref>
                        <Text>About</Text>
                      </Link>
                    </NavbarItem>
                    <NavbarItem>
                      <Link href="/contact" passHref>
                        <Text>Contact</Text>
                      </Link>
                    </NavbarItem>
                  </NavbarContent>
                </NavbarMenu>
              </Col>
            </Row>
          </NavbarContent>
        </Navbar>
      </Container>
    </AppBar>
  );
};

export default CustomNavbar;
