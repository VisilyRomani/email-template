import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NotionMagicLinkEmailProps {
  loginCode?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NotionMagicLinkEmail = ({
  loginCode = "sparo-ndigo-amurt-secan",
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Invoice</Preview>
    <Tailwind
      config={{
        theme: {
          fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
          },
        },
      }}
    >
      <Body className="bg-white font-sans">
        <Container className="mx-auto pt-[20px] pb-[48px]">
          <Section>
            <Row>
              <Column>
                <Heading className="text-gray-800 text-3xl p-0 my-[30px] mx-0 font-normal">
                  <strong>Radiant Cleaning Solution</strong>
                </Heading>
              </Column>
              <Column align="right" className="table-cell">
                <strong className="text-gray-400">
                  <Text className="text-2xl">Invoice</Text>
                </strong>
              </Column>
            </Row>
          </Section>
          <Section className="border-collapse border-spacing-0 border-r-2">
            <Row>
              <Column>
                <Text className=" text-gray-400">Prepared For</Text>
                <strong>
                  <Text className="leading-3 text-xl text-gray-700">
                    Michael Wong
                    <Text className="leading-[1px] text-gray-700">
                      438 Lewin Way
                    </Text>
                  </Text>
                </strong>
              </Column>
              <Column align="right" className="align-top">
                <Row>
                  <Text className="text-gray-400">Period</Text>
                  <Text className="leading-3 text-xl  text-gray-700">
                    <strong>Jan 1</strong> to <strong>Jan 1</strong>
                  </Text>
                </Row>
              </Column>
            </Row>
          </Section>
          <Hr className="border-gray-300 my-5" />
          <Section>
            <Row>
              <Column>
                <strong>
                  <Text className="text-sky-600 text-lg">
                    We appreicate your business.
                  </Text>
                </strong>
                <Text className="max-w-[350px] mr-3">
                  Thanks for being a customer. A detailed summer of your invoice
                  is attached. If you have any questions, we're happy to help.
                  You can contact us at {`[Email]`} or call {"[Phone]"}.
                </Text>
              </Column>
              <Column align="right">
                <Img
                  src="https://pub-0aac95f3b23147dfba282acea4dd4b92.r2.dev/e2a9fa14-5fde-4bb7-8044-a17f6849140b/logo/cljs0zchs00002a6bjgq9gwxi"
                  width={200}
                />
              </Column>
            </Row>
          </Section>
          <Hr className="border-gray-300 my-5" />
          <Section>
            <strong>
              <Text className="text-sky-600 text-lg">Invoice Summary</Text>
            </strong>
            <Row>
              <Column className="p-0 m-0">
                <Text className="text-gray-400 text-base m-0">Description</Text>
              </Column>
              <Column align="right" className="p-0 m-0">
                <Text className="text-gray-400 text-base m-0">Amount</Text>
              </Column>
            </Row>
            <Hr className="border-gray-300" />
            <Row>
              <Column>
                <strong>
                  <Text className="text-sm my-2 text-gray-600">
                    4 Eavestrouph Cleaning
                  </Text>
                </strong>
              </Column>
              <Column align="right">
                <Text className="text-sm my-2 text-gray-600">$150.00</Text>
              </Column>
            </Row>
            <Hr className="border-gray-300" />
            <Row>
              <Column>
                <strong>
                  <Text className="text-sm my-2 text-gray-600">
                    4 Eavestrouph Cleaning
                  </Text>
                </strong>
              </Column>
              <Column align="right">
                <Text className="text-sm my-2 text-gray-600">$150.00</Text>
              </Column>
            </Row>
            <Hr className="border-gray-300" />
            <Row>
              <Column>
                <strong>
                  <Text className="text-sm my-2 text-gray-600">
                    4 Eavestrouph Cleaning
                  </Text>
                </strong>
              </Column>
              <Column align="right">
                <Text className="text-sm my-2 text-gray-600">$150.00</Text>
              </Column>
            </Row>
            <Hr className="border-gray-300" />

            <Row>
              <Column colSpan={2}>
                <Text className="text-sm my-2 text-gray-600">Subtotal</Text>
              </Column>
              <Column>
                <Text className="text-sm my-2 text-gray-600">450.00</Text>
              </Column>
            </Row>
            <Row>
              <Column colSpan={2}>
                <Text className="text-sm my-2 text-gray-600">tax</Text>
              </Column>
              <Column>
                <Text className="text-sm my-2 text-gray-600">450.00</Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default NotionMagicLinkEmail;
{
  // const informationTableColumn = {
  //   paddingLeft: '20px',
  //   borderStyle: 'solid',
  //   borderColor: 'white',
  //   borderWidth: '0px 1px 1px 0px',
  //   height: '44px',
  // };
  // const informationTableLabel = {
  //   ...resetText,
  //   color: 'rgb(102,102,102)',
  //   fontSize: '10px',
  // };
  // const informationTableValue = {
  //   fontSize: '12px',
  //   margin: '0',
  //   padding: '0',
  //   lineHeight: 1.4,
  // };
  // const informationTable = {
  // borderCollapse: 'collapse' as const,
  // borderSpacing: '0px',
  // color: 'rgb(51,51,51)',
  // backgroundColor: 'rgb(250,250,250)',
  // borderRadius: '3px',
  //   // fontSize: '12px',
  // };
  /* <Section style={informationTable}>
  <Row style={informationTableRow}>
    <Column colSpan={2}>
      <Row>
        <Column style={informationTableColumn}>
          <Text style={informationTableLabel}>APPLE ID</Text>
          <Link
            style={{
              ...informationTableValue,
              color: "#15c",
              textDecoration: "underline",
            }}
          >
            zeno.rocha@gmail.com
          </Link>
        </Column>
      </Row>

      <Row>
        <Column style={informationTableColumn}>
          <Text style={informationTableLabel}>INVOICE DATE</Text>
          <Text style={informationTableValue}>18 Jan 2023</Text>
        </Column>
      </Row>

      <Row>
        <Column style={informationTableColumn}>
          <Text style={informationTableLabel}>ORDER ID</Text>
          <Link
            style={{
              ...informationTableValue,
              color: "#15c",
              textDecoration: "underline",
            }}
          >
            ML4F5L8522
          </Link>
        </Column>
        <Column style={informationTableColumn}>
          <Text style={informationTableLabel}>DOCUMENT NO.</Text>
          <Text style={informationTableValue}>186623754793</Text>
        </Column>
      </Row>
    </Column>
    <Column style={informationTableColumn} colSpan={2}>
      <Text style={informationTableLabel}>BILLED TO</Text>
      <Text style={informationTableValue}>Visa .... 7461 (Apple Pay)</Text>
      <Text style={informationTableValue}>Zeno Rocha</Text>
      <Text style={informationTableValue}>2125 Chestnut St</Text>
      <Text style={informationTableValue}>San Francisco, CA 94123</Text>
      <Text style={informationTableValue}>USA</Text>
    </Column>
  </Row>
</Section>; */
}
