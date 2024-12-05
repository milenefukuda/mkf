import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row
            justify="space-between"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Col
              lg={10}
              md={10}
              sm={12}
              xs={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Empty />
              <Language>{t("Endereço")}</Language>
              <Para>Rua Abílio Soares, 227, Conjunto 102</Para>
              <Para>Paraíso, São Paulo - SP, 04005-000</Para>
              <Para>CRC/SP - 2SP027724/O - 0</Para>
            </Col>
            <Col
              lg={10}
              md={10}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Label htmlFor="select-lang" style={{ marginBottom: "10px" }}>
                  {t("Idiomas")}
                </Label>
                <LanguageSwitchContainer
                  style={{ display: "flex", gap: "10px" }}
                >
                  <LanguageSwitch onClick={() => handleChange("en")}>
                    <SvgIcon
                      src="united-states.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                    />
                  </LanguageSwitch>
                  <LanguageSwitch onClick={() => handleChange("es")}>
                    <SvgIcon
                      src="spain.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                    />
                  </LanguageSwitch>
                </LanguageSwitchContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterSection>

      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="contact">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="150x"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
