import React from "react";

import {
  Column,
  Stack,
  Image,
  Text,
  Row,
  Button,
  List,
  Line,
} from "components";

const SchoolWebsitePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Stack className="lg:h-[2723px] xl:h-[3115px] h-[3501px] 2xl:h-[3504px] 3xl:h-[4204px] w-[100%]">
          <Stack className="absolute lg:h-[2723px] xl:h-[3115px] h-[3501px] 2xl:h-[3504px] 3xl:h-[4204px] w-[100%]">
            <Stack className="absolute lg:h-[2598px] xl:h-[2972px] h-[3340px] 2xl:h-[3343px] 3xl:h-[4011px] w-[100%]">
              <Stack className="absolute lg:h-[2598px] xl:h-[2972px] h-[3340px] 2xl:h-[3343px] 3xl:h-[4011px] w-[100%]">
                <Column className="absolute items-center justify-start w-[100%]">
                  <Column className="bg-gradient  justify-center lg:pb-[45px] xl:pb-[51px] pb-[58px] 3xl:pb-[69px] xl:pl-[2px] lg:pl-[2px] pl-[3px] lg:pt-[108px] xl:pt-[123px] pt-[139px] 3xl:pt-[166px] w-[100%]">
                    <Stack className="lg:h-[239px] xl:h-[274px] h-[307px] 2xl:h-[308px] 3xl:h-[369px] w-[39%]">
                      <Stack
                        className="absolute bg-cover bg-repeat lg:h-[186px] xl:h-[213px] h-[239px] 2xl:h-[240px] 3xl:h-[287px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:w-[185px] xl:w-[212px] w-[239px] 3xl:w-[286px]"
                        style={{
                          backgroundImage: "url('images/img_group.png')",
                        }}
                      >
                        <Image
                          src={"images/img_group_1.png"}
                          className="absolute lg:h-[170px] xl:h-[194px] h-[218px] 2xl:h-[219px] 3xl:h-[262px] inset-[0] justify-center m-[auto] object-contain lg:w-[169px] xl:w-[193px] w-[218px] 3xl:w-[261px]"
                          alt="Group"
                        />
                      </Stack>
                      <Column className="absolute items-start justify-start w-[87%]">
                        <a
                          href={"https://lottiefiles.com/1408-network-lost"}
                          target="_blank"
                          className="font-semibold lg:leading-[38px] xl:leading-[44px] leading-[50.00px] 2xl:leading-[50px] 3xl:leading-[60px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-left text-white_A700 w-[70%]"
                          rel="noreferrer"
                        >
                          Lorem ipsum dolor
                          <br />
                          sit amet
                        </a>
                        <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Text className="capitalize font-medium lg:leading-[24px] xl:leading-[28px] leading-[32.00px] 2xl:leading-[32px] 3xl:leading-[38px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.z
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[40%]">
                      <Column
                        className="absolute bg-cover bg-repeat lg:h-[181px] xl:h-[207px] h-[232px] 2xl:h-[233px] 3xl:h-[279px] items-center justify-start lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:pr-[4px] xl:pr-[5px] pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] lg:w-[180px] xl:w-[206px] w-[232px] 3xl:w-[278px]"
                        style={{
                          backgroundImage: "url('images/img_group_2.png')",
                        }}
                      >
                        <Stack
                          className="bg-cover bg-repeat lg:h-[172px] xl:h-[196px] h-[220px] 2xl:h-[221px] 3xl:h-[265px] pr-[1px] lg:w-[171px] xl:w-[195px] w-[220px] 3xl:w-[264px]"
                          style={{
                            backgroundImage: "url('images/img_group12.png')",
                          }}
                        >
                          <Image
                            src={"images/img_group_3.png"}
                            className="absolute lg:h-[61px] xl:h-[70px] h-[78px] 2xl:h-[79px] 3xl:h-[94px] inset-y-[0] my-[auto] object-contain w-[39%]"
                            alt="Group"
                          />
                        </Stack>
                      </Column>
                      <Row className="absolute items-center justify-between w-[59%]">
                        <Button className="bg-orange_200 font-medium lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 text-center w-[43%]">
                          Apply Now
                        </Button>
                        <Button className="border border-orange_200 border-solid font-medium lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs1 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-orange_200 w-[45%]">
                          Contact Us
                        </Button>
                      </Row>
                    </Stack>
                  </Column>
                  <Stack className="lg:h-[1358px] xl:h-[1553px] h-[1745px] 2xl:h-[1747px] 3xl:h-[2096px] lg:mt-[590px] xl:mt-[675px] mt-[759px] 3xl:mt-[911px] w-[100%]">
                    <Stack
                      className="absolute bg-cover bg-repeat lg:h-[1293px] xl:h-[1479px] h-[1662px] 2xl:h-[1664px] 3xl:h-[1996px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group10.png')",
                      }}
                    >
                      <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[84%]">
                        <Column className="items-center w-[100%]">
                          <Text className="font-semibold mx-[auto] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                            Our Facilities
                          </Text>
                          <Row className="items-center justify-start lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[100%]">
                            <Button className="bg-bluegray_900 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:mb-[132px] xl:mb-[151px] mb-[170px] 3xl:mb-[204px] lg:mt-[121px] xl:mt-[138px] mt-[156px] 3xl:mt-[187px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 shadow-bs lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                              <Image
                                src={"images/img_group69.png"}
                                className="w-[51%] flex items-center justify-center"
                                alt="Group69"
                              />
                            </Button>
                            <Image
                              src={"images/img_maskgroup.png"}
                              className="lg:h-[284px] xl:h-[324px] h-[364px] 2xl:h-[365px] 3xl:h-[438px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] object-contain w-[22%]"
                              alt="MaskGroup"
                            />
                            <Button className="bg-bluegray_900 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:mb-[132px] xl:mb-[151px] mb-[170px] 3xl:mb-[204px] lg:ml-[611px] xl:ml-[699px] ml-[786px] 3xl:ml-[943px] lg:mt-[121px] xl:mt-[138px] mt-[156px] 3xl:mt-[187px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 shadow-bs lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                              <Image
                                src={"images/img_group70.png"}
                                className="w-[51%] flex items-center justify-center"
                                alt="Group70"
                              />
                            </Button>
                          </Row>
                          <Button className="bg-orange_200 font-medium xl:ml-[457px] ml-[514px] 3xl:ml-[617px] xl:mr-[456px] mr-[513px] 3xl:mr-[615px] mt-[104px] 3xl:mt-[124px] lg:mt-[80px] xl:mt-[92px] lg:mx-[399px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs1 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 text-center w-[15%]">
                            View all facilities
                          </Button>
                        </Column>
                        <Column className="items-end lg:mt-[101px] xl:mt-[116px] mt-[131px] 3xl:mt-[157px] lg:pr-[203px] xl:pr-[233px] pr-[262px] 3xl:pr-[314px] w-[100%]">
                          <Text className="font-semibold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            Upcoming Events
                          </Text>
                        </Column>
                      </Column>
                      <Image
                        src={"images/img_maskgroup_1.png"}
                        className="absolute lg:h-[284px] xl:h-[324px] h-[364px] 2xl:h-[365px] 3xl:h-[438px] inset-x-[0] mx-[auto] object-contain top-[14%] w-[18%]"
                        alt="MaskGroup"
                      />
                      <Image
                        src={"images/img_maskgroup_2.png"}
                        className="absolute lg:h-[284px] xl:h-[324px] h-[364px] 2xl:h-[365px] 3xl:h-[438px] object-contain right-[20%] top-[14%] w-[18%]"
                        alt="MaskGroup"
                      />
                      <List
                        className="absolute lg:gap-[52px] xl:gap-[60px] gap-[68px] 3xl:gap-[81px] grid grid-cols-3 inset-x-[0] min-h-[auto] mx-[auto] top-[14%] w-[64%]"
                        orientation="horizontal"
                      >
                        <Column className="items-start justify-start w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Image
                              src={"images/img_rectangle49.png"}
                              className="lg:h-[284px] xl:h-[324px] h-[364px] 2xl:h-[365px] 3xl:h-[438px] object-cover rounded-radius1225 w-[100%]"
                              alt="Rectangle49"
                            />
                          </Column>
                          <Text className="font-medium lg:ml-[64px] xl:ml-[73px] ml-[83px] 3xl:ml-[99px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            Sports
                          </Text>
                        </Column>
                        <Column className="items-start justify-start w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Image
                              src={"images/img_rectangle48.png"}
                              className="lg:h-[284px] xl:h-[324px] h-[364px] 2xl:h-[365px] 3xl:h-[438px] object-cover rounded-radius1225 w-[100%]"
                              alt="Rectangle48"
                            />
                          </Column>
                          <Text className="font-medium lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            Library
                          </Text>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_rectangle50.png"}
                            className="lg:h-[284px] xl:h-[324px] h-[364px] 2xl:h-[365px] 3xl:h-[438px] object-cover rounded-radius1225 w-[100%]"
                            alt="Rectangle50"
                          />
                          <Text className="font-medium 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] mr-[100px] 3xl:mr-[120px] lg:mr-[77px] xl:mr-[88px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            Music
                          </Text>
                        </Column>
                      </List>
                      <Column className="absolute items-start justify-start left-[13%] top-[11%] w-[4%]">
                        <Image
                          src={"images/img_bxbxfootball.png"}
                          className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] object-contain lg:w-[28px] xl:w-[32px] w-[37px] 3xl:w-[44px]"
                          alt="bxbxfootball"
                        />
                        <Column className="items-end lg:mt-[301px] xl:mt-[345px] mt-[388px] 3xl:mt-[465px] w-[100%]">
                          <Image
                            src={"images/img_vector.png"}
                            className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] object-contain lg:w-[28px] xl:w-[32px] w-[37px] 3xl:w-[44px]"
                            alt="Vector"
                          />
                        </Column>
                      </Column>
                      <Image
                        src={"images/img_vector_1.png"}
                        className="absolute lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] object-contain right-[18%] top-[7%] w-[2%]"
                        alt="Vector"
                      />
                      <Image
                        src={"images/img_vector_2.png"}
                        className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain right-[12%] top-[36%] w-[2%]"
                        alt="Vector"
                      />
                      <Row className="absolute bottom-[44%] items-start justify-between right-[8%] w-[48%]">
                        <Text className="capitalize font-normal mt-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                          View All
                        </Text>
                        <Text className="capitalize font-normal mb-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                          View All
                        </Text>
                      </Row>
                    </Stack>
                    <div className="absolute bottom-[29%] lg:h-[311px] xl:h-[355px] h-[399px] 2xl:h-[400px] 3xl:h-[480px] outline outline-[20px] outline-purple_600_83 rounded-radius1995 w-[17%]"></div>
                    <div className="absolute lg:h-[361px] xl:h-[412px] h-[463px] 2xl:h-[464px] 3xl:h-[556px] outline outline-[20px] outline-orange_200_83 rounded-radius2315 w-[27%]"></div>
                  </Stack>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat items-center justify-start 3xl:pb-[103px] xl:pb-[76px] pb-[86px] 3xl:pt-[102px] xl:pt-[75px] pt-[85px] lg:py-[66px] top-[3%] w-[27%]"
                  style={{ backgroundImage: "url('images/img_group_4.png')" }}
                >
                  <Stack
                    className="bg-cover bg-repeat lg:h-[391px] xl:h-[447px] h-[502px] 2xl:h-[503px] 3xl:h-[603px] lg:pr-[62px] xl:pr-[71px] pr-[80px] 3xl:pr-[96px] w-[78%]"
                    style={{ backgroundImage: "url('images/img_group13.png')" }}
                  >
                    <Image
                      src={"images/img_group31.png"}
                      className="absolute xl:h-[110px] h-[123px] 2xl:h-[124px] 3xl:h-[148px] lg:h-[96px] inset-y-[0] my-[auto] object-contain w-[5%]"
                      alt="Group31"
                    />
                  </Stack>
                </Column>
              </Stack>
              <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[1%] w-[91%]">
                <Column className="items-center w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Image
                      src={"images/img_logofinalwhit.png"}
                      className="lg:h-[63px] xl:h-[73px] h-[81px] 2xl:h-[82px] 3xl:h-[98px] object-contain w-[27%]"
                      alt="logofinalwhit"
                    />
                    <header className="lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[72%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text className="cursor-pointer hover:font-normal font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Home
                        </Text>
                        <Text className="cursor-pointer hover:font-normal font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Routine
                        </Text>
                        <Text className="cursor-pointer hover:font-normal font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Downloads
                        </Text>
                        <Text className="cursor-pointer hover:font-normal font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Notification
                        </Text>
                        <Text className="cursor-pointer hover:font-normal font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Admissions
                        </Text>
                        <Stack className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] w-[8%]">
                          <Text className="hover:absolute absolute cursor-pointer hover:font-normal font-normal not-italic right-[3%] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                            About
                          </Text>
                          <Image
                            src={"images/img_polygon1.png"}
                            className="absolute bottom-[25%] h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] object-contain rounded-radius1 w-[21%]"
                            alt="Polygon1"
                          />
                        </Stack>
                        <Stack className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] w-[7%]">
                          <Text className="hover:absolute absolute cursor-pointer hover:font-normal font-normal lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                            More
                          </Text>
                          <Image
                            src={"images/img_polygon2.png"}
                            className="absolute bottom-[25%] h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] object-contain rounded-radius1 w-[24%]"
                            alt="Polygon2"
                          />
                        </Stack>
                        <Text className="cursor-pointer hover:font-normal font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Contact
                        </Text>
                      </Row>
                    </header>
                  </Row>
                </Column>
                <Column className="items-end lg:mt-[59px] xl:mt-[67px] mt-[76px] 3xl:mt-[91px] lg:pr-[62px] xl:pr-[71px] pr-[80px] 3xl:pr-[96px] w-[100%]">
                  <Stack className="lg:h-[437px] xl:h-[500px] h-[561px] 2xl:h-[562px] 3xl:h-[674px] xl:pr-[2px] lg:pr-[2px] pr-[3px] lg:pt-[10px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] rotate-[-3deg] w-[50%]">
                    <Stack
                      className="absolute bg-cover bg-repeat lg:h-[311px] xl:h-[355px] h-[399px] 2xl:h-[400px] 3xl:h-[480px] lg:pl-[5px] xl:pl-[6px] pl-[7px] 3xl:pl-[8px] right-[7%] rotate-[-6deg] top-[6%] w-[78%]"
                      style={{
                        backgroundImage: "url('images/img_introimage.png')",
                      }}
                    >
                      <Image
                        src={"images/img_placeholderima.png"}
                        className="absolute lg:h-[299px] xl:h-[342px] h-[384px] 2xl:h-[385px] 3xl:h-[462px] inset-y-[0] my-[auto] object-contain w-[94%]"
                        alt="placeholderima"
                      />
                    </Stack>
                    <Image
                      src={"images/img_bgcomponents.png"}
                      className="absolute lg:h-[427px] xl:h-[488px] h-[548px] 2xl:h-[549px] 3xl:h-[658px] inset-[0] justify-center m-[auto] object-contain w-[100%]"
                      alt="bgcomponents"
                    />
                  </Stack>
                </Column>
                <Text className="font-medium lg:leading-[37px] xl:leading-[42px] leading-[48.00px] 2xl:leading-[48px] 3xl:leading-[57px] lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] lg:mt-[154px] xl:mt-[177px] mt-[199px] 3xl:mt-[238px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 text-left w-[48%]">
                  Welcome to <br />
                  Spiral Galaxy Higher Secondary School
                </Text>
                <Column className="items-end lg:mt-[126px] xl:mt-[144px] mt-[162px] 3xl:mt-[194px] lg:pr-[119px] xl:pr-[136px] pr-[154px] 3xl:pr-[184px] w-[100%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    <span className="text-black_900 font-poppins">
                      Lorem Ipsum,{" "}
                    </span>
                    <span className="text-black_900 font-poppins font-normal">
                      Principle
                    </span>
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Column className="absolute bottom-[10%] inset-x-[0] items-start justify-start mx-[auto] w-[84%]">
              <Column className="items-center w-[100%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text className="font-normal lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 text-left w-[52%]">
                    Located in the heart of The Valley of Pokhara, the Capital
                    of national academia, Kumudini Homes was established in 1987
                    with the motto "Always Aim High". It hosts a faculty of
                    teachers who have proven their highest academic,
                    professional excellence in their respective fields. Teachers
                    are prompted to stay up to date in their specialties vand
                    current professionalism. The faculty of well trained,
                    experienced, dedicated and self-motivated professionals
                    ensures the mission of Kumudini Homes. <br />
                    <br />
                    <br />
                    Classes from Montessori to 12, with one thousand and five
                    hundred students are being run as per the need and demand of
                    the academic community.
                    <br />
                    <br />
                    <br />
                    With 20 plus years of history, Kumudini Homes is highly
                    ranked as one of the top boarding schools in Nepal. It has
                    built a reputation for inspiring its students to be high
                    achievers with an outlook to the future. The motto that
                    governs the path of Kumudini Homes is "Always Aim High".
                    Over the years, numerous students have graduated in a
                    variety of subjects with top marks in both district and
                    national exams. Kumudini Homes also boasts of multiple years
                    of a 100 percent graduation rate for SLC.
                  </Text>
                  <Text className="font-normal italic lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mb-[63px] xl:mb-[72px] mb-[82px] 3xl:mb-[98px] lg:mt-[157px] xl:mt-[180px] mt-[203px] 3xl:mt-[243px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 text-center w-[34%]">
                    “The city of Pokhara is home to one of the landmark
                    institutions of learning, Kumudini Homes. With 30 plus years
                    of history, it is highly ranked as one of the top boarding
                    schools in Nepal. It has built a reputation for inspiring
                    its students to be high achievers with an outlook to the
                    future. “
                  </Text>
                </Row>
              </Column>
              <Row className="items-start justify-start 3xl:mt-[1066px] lg:mt-[690px] xl:mt-[789px] mt-[888px] w-[84%]">
                <Column className="items-start justify-start lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] w-[57%]">
                  <Text className="font-semibold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                    Latest News
                  </Text>
                  <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <List
                      className="bg-white_A700 gap-[0] min-h-[auto] rounded-radius10 shadow-bs w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-start justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mr-[36px] xl:mr-[41px] mr-[47px] 3xl:mr-[56px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[87%]">
                        <Image
                          src={"images/img_rectangle51.png"}
                          className="lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] object-contain rounded-radius10 w-[28%]"
                          alt="Rectangle51"
                        />
                        <Column className="items-start justify-start lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] w-[66%]">
                          <Text className="font-medium ml-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                            Lorem ipsum Dolor Sit
                          </Text>
                          <Column className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                            <Text className="capitalize font-normal lg:leading-[15px] xl:leading-[17px] leading-[20.00px] 2xl:leading-[20px] 3xl:leading-[24px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[100%]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.z
                            </Text>
                          </Column>
                          <Text className="capitalize font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                            8th, Shrawan 2078
                          </Text>
                        </Column>
                      </Row>
                      <Line className="self-center w-[88%] h-[1px] bg-gray_300" />
                      <Row className="items-start justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mr-[36px] xl:mr-[41px] mr-[47px] 3xl:mr-[56px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[87%]">
                        <Image
                          src={"images/img_rectangle51_1.png"}
                          className="lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] object-contain rounded-radius10 w-[28%]"
                          alt="Rectangle51"
                        />
                        <Column className="items-start justify-start lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] w-[66%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                            Lorem ipsum Dolor Sit
                          </Text>
                          <Column className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                            <Text className="capitalize font-normal lg:leading-[15px] xl:leading-[17px] leading-[20.00px] 2xl:leading-[20px] 3xl:leading-[24px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[100%]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.z
                            </Text>
                          </Column>
                          <Text className="capitalize font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                            8th, August 2021
                          </Text>
                        </Column>
                      </Row>
                      <Line className="self-center w-[88%] h-[1px] bg-gray_300" />
                      <Row className="items-start justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mr-[36px] xl:mr-[41px] mr-[47px] 3xl:mr-[56px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[87%]">
                        <Image
                          src={"images/img_rectangle51_2.png"}
                          className="lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] object-contain w-[28%]"
                          alt="Rectangle51"
                        />
                        <Column className="items-start justify-start lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] w-[66%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                            Lorem ipsum Dolor Sit
                          </Text>
                          <Column className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                            <Text className="capitalize font-normal lg:leading-[15px] xl:leading-[17px] leading-[20.00px] 2xl:leading-[20px] 3xl:leading-[24px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[100%]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.z
                            </Text>
                          </Column>
                          <Text className="capitalize font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                            8th, August 2021
                          </Text>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                </Column>
                <List
                  className="gap-[0] min-h-[auto] lg:ml-[117px] xl:ml-[134px] ml-[151px] 3xl:ml-[181px] lg:mt-[42px] xl:mt-[48px] mt-[55px] 3xl:mt-[66px] w-[28%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 items-center justify-end lg:my-[10px] xl:my-[12px] my-[13.5px] 2xl:my-[13px] 3xl:my-[16px] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] rounded-radius10 shadow-bs w-[100%]">
                    <Column className="items-start w-[16%]">
                      <Column className="items-center w-[100%]">
                        <Stack className="lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] w-[100%]">
                          <Text className="absolute font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                            Shrawn
                          </Text>
                          <Text className="absolute font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            08
                          </Text>
                        </Stack>
                      </Column>
                      <Line className="bg-bluegray_900 h-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] rotate-[-180deg] w-[47%]" />
                    </Column>
                    <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 text-left w-[65%]">
                      Final Term Result
                    </Text>
                    <Button className="bg-deep_purple_500 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 shadow-bs lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                      <Image
                        src={"images/img_group19.png"}
                        className="w-[51%] flex items-center justify-center"
                        alt="Group19"
                      />
                    </Button>
                  </Row>
                  <Row className="bg-white_A700 items-center justify-end lg:my-[10px] xl:my-[12px] my-[13.5px] 2xl:my-[13px] 3xl:my-[16px] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] rounded-radius10 shadow-bs w-[100%]">
                    <Column className="items-start w-[16%]">
                      <Column className="items-center w-[100%]">
                        <Stack className="lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] w-[100%]">
                          <Text className="absolute font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                            Shrawn
                          </Text>
                          <Text className="absolute font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            12
                          </Text>
                        </Stack>
                      </Column>
                      <Line className="bg-bluegray_900 h-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] rotate-[-180deg] w-[47%]" />
                    </Column>
                    <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 text-left w-[65%]">
                      School App Tutorials for Students. How to use school app?
                    </Text>
                    <Button className="bg-deep_purple_500 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 shadow-bs lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                      <Image
                        src={"images/img_group19_1.png"}
                        className="w-[51%] flex items-center justify-center"
                        alt="Group19"
                      />
                    </Button>
                  </Row>
                  <Row className="bg-white_A700 items-center justify-end lg:my-[10px] xl:my-[12px] my-[13.5px] 2xl:my-[13px] 3xl:my-[16px] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] rounded-radius10 shadow-bs w-[100%]">
                    <Column className="items-start w-[16%]">
                      <Column className="items-center w-[100%]">
                        <Stack className="lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] w-[100%]">
                          <Text className="absolute font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                            Shrawn
                          </Text>
                          <Text className="absolute font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            12
                          </Text>
                        </Stack>
                      </Column>
                      <Line className="bg-bluegray_900 h-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] rotate-[-180deg] w-[47%]" />
                    </Column>
                    <Text className="capitalize font-normal lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 text-left w-[65%]">
                      Zoom Meeting
                    </Text>
                    <Button className="bg-deep_purple_500 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 shadow-bs lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                      <Image
                        src={"images/img_group19_2.png"}
                        className="w-[51%] flex items-center justify-center"
                        alt="Group19"
                      />
                    </Button>
                  </Row>
                  <Row className="bg-white_A700 items-center justify-end lg:my-[10px] xl:my-[12px] my-[13.5px] 2xl:my-[13px] 3xl:my-[16px] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] rounded-radius10 shadow-bs w-[100%]">
                    <Column className="items-start w-[16%]">
                      <Column className="items-center w-[100%]">
                        <Stack className="lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] w-[100%]">
                          <Text className="absolute font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                            Jesth
                          </Text>
                          <Text className="absolute font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            21
                          </Text>
                        </Stack>
                      </Column>
                      <Line className="bg-bluegray_900 h-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] rotate-[-180deg] w-[47%]" />
                    </Column>
                    <Text className="capitalize font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                      FINAL TERM RESULT 2077
                    </Text>
                    <Button className="bg-deep_purple_500 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 shadow-bs lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                      <Image
                        src={"images/img_group19_3.png"}
                        className="w-[51%] flex items-center justify-center"
                        alt="Group19"
                      />
                    </Button>
                  </Row>
                  <Row className="bg-white_A700 items-center justify-end lg:my-[10px] xl:my-[12px] my-[13.5px] 2xl:my-[13px] 3xl:my-[16px] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] rounded-radius10 shadow-bs w-[100%]">
                    <Column className="items-start w-[16%]">
                      <Column className="items-center w-[100%]">
                        <Stack className="lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] w-[100%]">
                          <Text className="absolute font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                            Jesth
                          </Text>
                          <Text className="absolute font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                            21
                          </Text>
                        </Stack>
                      </Column>
                      <Line className="bg-bluegray_900 h-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] rotate-[-180deg] w-[47%]" />
                    </Column>
                    <Text className="capitalize font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                      FINAL TERM RESULT 2077
                    </Text>
                    <Button className="bg-deep_purple_500 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 shadow-bs lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                      <Image
                        src={"images/img_group19_4.png"}
                        className="w-[51%] flex items-center justify-center"
                        alt="Group19"
                      />
                    </Button>
                  </Row>
                </List>
              </Row>
            </Column>
            <Stack className="absolute lg:h-[190px] xl:h-[218px] h-[244px] 2xl:h-[245px] 3xl:h-[293px] w-[100%]">
              <Row className="absolute bg-gradient1  bottom-[3%] items-start justify-end lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pr-[35px] xl:pr-[40px] pr-[45px] 3xl:pr-[54px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] top-[0] w-[100%]">
                <Image
                  src={"images/img_closedbook.png"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:mb-[115px] xl:mb-[131px] mb-[148px] 3xl:mb-[177px] object-contain w-[2%]"
                  alt="Closedbook"
                />
                <Image
                  src={"images/img_blackboard.png"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[17px] xl:mb-[20px] mb-[23px] 3xl:mb-[27px] lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] lg:mt-[101px] xl:mt-[116px] mt-[131px] 3xl:mt-[157px] object-contain rounded-radius1 w-[2%]"
                  alt="blackboard"
                />
                <Image
                  src={"images/img_pencil.png"}
                  className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] xl:mb-[100px] mb-[113px] 3xl:mb-[135px] lg:mb-[87px] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] object-contain lg:w-[28px] xl:w-[32px] w-[37px] 3xl:w-[44px]"
                  alt="pencil"
                />
                <Stack className="lg:h-[144px] xl:h-[165px] h-[185px] 2xl:h-[186px] 3xl:h-[223px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] w-[36%]">
                  <Stack className="absolute lg:h-[144px] xl:h-[165px] h-[185px] 2xl:h-[186px] 3xl:h-[223px] w-[100%]">
                    <Row className="absolute items-start justify-center right-[7%] w-[74%]">
                      <Column className="items-start justify-start w-[85%]">
                        <Column className="items-center w-[100%]">
                          <Text className="font-semibold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                            Download our Apps
                          </Text>
                        </Column>
                        <Column className="items-end 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] mt-[99px] pr-[108px] 3xl:pr-[129px] lg:pr-[84px] xl:pr-[96px] w-[100%]">
                          <Image
                            src={"images/img_book.png"}
                            className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[13%]"
                            alt="Book"
                          />
                        </Column>
                      </Column>
                      <Image
                        src={"images/img_backpack.png"}
                        className="lg:h-[28px] xl:h-[32px] h-[35px] 2xl:h-[36px] 3xl:h-[43px] lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:mt-[102px] xl:mt-[117px] mt-[132px] 3xl:mt-[158px] object-contain w-[8%]"
                        alt="backpack"
                      />
                    </Row>
                    <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                      <Image
                        src={"images/img_download1.png"}
                        className="3xl:h-[103px] lg:h-[67px] xl:h-[76px] h-[85px] 2xl:h-[86px] lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] object-contain w-[42%]"
                        alt="download1"
                      />
                      <Image
                        src={"images/img_logoappstore.png"}
                        className="xl:h-[103px] h-[115px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] object-contain w-[50%]"
                        alt="logoappstore"
                      />
                    </Row>
                  </Stack>
                  <Image
                    src={"images/img_group_5.png"}
                    className="absolute lg:h-[61px] xl:h-[70px] h-[78px] 2xl:h-[79px] 3xl:h-[94px] object-contain right-[15%] top-[5%] w-[17%]"
                    alt="Group"
                  />
                </Stack>
                <Image
                  src={"images/img_pencil_1.png"}
                  className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] lg:mb-[107px] xl:mb-[122px] mb-[138px] 3xl:mb-[165px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] object-contain lg:w-[28px] xl:w-[32px] w-[37px] 3xl:w-[44px]"
                  alt="pencil"
                />
                <Image
                  src={"images/img_calculator.png"}
                  className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] object-contain w-[3%]"
                  alt="calculator"
                />
                <Image
                  src={"images/img_book_1.png"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[58px] xl:mb-[66px] mb-[75px] 3xl:mb-[90px] lg:ml-[202px] xl:ml-[231px] ml-[260px] 3xl:ml-[312px] lg:mt-[61px] xl:mt-[70px] mt-[79px] 3xl:mt-[94px] object-contain w-[2%]"
                  alt="Book"
                />
              </Row>
              <Stack
                className="absolute bg-cover bg-repeat lg:h-[190px] xl:h-[218px] h-[244px] 2xl:h-[245px] 3xl:h-[293px] left-[5%] lg:pb-[24px] xl:pb-[27px] pb-[31px] 3xl:pb-[37px] lg:pr-[20px] xl:pr-[23px] pr-[26px] 3xl:pr-[31px] w-[17%]"
                style={{ backgroundImage: "url('images/img_group_6.png')" }}
              >
                <Image
                  src={"images/img_group_7.png"}
                  className="absolute lg:h-[142px] xl:h-[162px] h-[182px] 2xl:h-[183px] 3xl:h-[219px] inset-[0] justify-center m-[auto] object-contain w-[83%]"
                  alt="Group"
                />
                <Stack
                  className="absolute bg-cover bg-repeat bottom-[10%] 3xl:h-[116px] lg:h-[75px] xl:h-[86px] h-[96px] 2xl:h-[97px] xl:p-[3px] lg:p-[3px] p-[4px] 3xl:w-[115px] lg:w-[74px] xl:w-[85px] w-[96px]"
                  style={{ backgroundImage: "url('images/img_group_8.png')" }}
                >
                  <Image
                    src={"images/img_group_9.png"}
                    className="absolute 3xl:h-[105px] lg:h-[68px] xl:h-[78px] h-[87px] 2xl:h-[88px] inset-[0] justify-center m-[auto] object-contain 3xl:w-[104px] lg:w-[67px] xl:w-[77px] w-[87px]"
                    alt="Group"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack className="absolute lg:h-[42px] xl:h-[48px] h-[53px] 2xl:h-[54px] 3xl:h-[64px] top-[3%] w-[43%]">
              <Column className="absolute bg-gradient2  items-center justify-start pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pr-[63px] xl:pr-[72px] pr-[81px] 3xl:pr-[97px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] rounded-radius25 top-[2%] w-[100%]">
                <Button className="bg-white_A700 font-medium lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius10 shadow-bs1 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-deep_purple_700 w-[17%]">
                  Login
                </Button>
              </Column>
              <Row className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[4%] my-[auto] w-[42%]">
                <Image
                  src={"images/img_location.png"}
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] object-contain w-[3%]"
                  alt="Location"
                />
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Simpani, Pokhara-01, Nepal
                </Text>
              </Row>
              <Row className="absolute h-[max-content] inset-y-[0] items-center justify-center my-[auto] right-[32%] w-[18%]">
                <Image
                  src={"images/img_vector_3.png"}
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] object-contain w-[11%]"
                  alt="Vector"
                />
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  061528624
                </Text>
              </Row>
            </Stack>
            <Image
              src={"images/img_cloudbg.png"}
              className="absolute lg:h-[359px] xl:h-[411px] h-[461px] 2xl:h-[462px] 3xl:h-[554px] object-cover top-[16%] w-[100%]"
              alt="cloudbg"
            />
          </Stack>
          <Image
            src={"images/img_rectangle17.png"}
            className="absolute lg:h-[185px] xl:h-[211px] h-[237px] 2xl:h-[238px] 3xl:h-[285px] object-contain right-[14%] rounded-radius50 top-[27%] w-[17%]"
            alt="Rectangle17"
          />
          <Stack
            className="absolute bg-cover bg-repeat bottom-[1%] lg:h-[133px] xl:h-[153px] h-[171px] 2xl:h-[172px] 3xl:h-[206px] xl:pl-[2px] lg:pl-[2px] pl-[3px] xl:py-[2px] lg:py-[2px] py-[3px] w-[7%]"
            style={{ backgroundImage: "url('images/img_group_11.png')" }}
          >
            <Image
              src={"images/img_group_14.png"}
              className="absolute lg:h-[127px] xl:h-[146px] h-[163px] 2xl:h-[164px] 3xl:h-[196px] inset-[0] justify-center m-[auto] object-contain w-[100%]"
              alt="Group"
            />
          </Stack>
        </Stack>
        <Row className="items-center justify-start xl:ml-[103px] ml-[116px] 3xl:ml-[139px] lg:ml-[90px] xl:mr-[102px] mr-[115px] 3xl:mr-[138px] lg:mr-[89px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] mt-[90px] w-[84%]">
          <Column className="items-center w-[17%]">
            <Image
              src={"images/img_rectangle22.png"}
              className="lg:h-[175px] xl:h-[200px] h-[224px] 2xl:h-[225px] 3xl:h-[269px] object-cover rounded-radius10 w-[100%]"
              alt="Rectangle22"
            />
            <Image
              src={"images/img_rectangle26.png"}
              className="lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] object-cover rounded-radius10 w-[100%]"
              alt="Rectangle26"
            />
          </Column>
          <Image
            src={"images/img_rectangle23.png"}
            className="lg:h-[304px] xl:h-[347px] h-[390px] 2xl:h-[391px] 3xl:h-[469px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] object-contain rounded-radius10 w-[30%]"
            alt="Rectangle23"
          />
          <Column className="items-center lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] w-[50%]">
            <Row className="items-center justify-between w-[100%]">
              <Image
                src={"images/img_rectangle24.png"}
                className="lg:h-[175px] xl:h-[200px] h-[224px] 2xl:h-[225px] 3xl:h-[269px] object-contain rounded-radius10 w-[35%]"
                alt="Rectangle24"
              />
              <Image
                src={"images/img_rectangle27.png"}
                className="lg:h-[175px] xl:h-[200px] h-[224px] 2xl:h-[225px] 3xl:h-[269px] object-contain rounded-radius10 w-[62%]"
                alt="Rectangle27"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Image
                src={"images/img_rectangle25.png"}
                className="lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] object-contain rounded-radius10 w-[54%]"
                alt="Rectangle25"
              />
              <Stack className="lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] w-[43%]">
                <Image
                  src={"images/img_rectangle28.png"}
                  className="absolute lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] object-contain right-[0] rounded-radius10 w-[100%]"
                  alt="Rectangle28"
                />
                <Column className="absolute bg-black_900_75 items-center justify-start left-[0] lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:pr-[22px] xl:pr-[25px] pr-[29px] 3xl:pr-[34px] lg:py-[33px] xl:py-[38px] py-[43px] 3xl:py-[51px] rounded-radius10 w-[100%]">
                  <Text className="font-medium lg:leading-[24px] xl:leading-[28px] leading-[32.00px] 2xl:leading-[32px] 3xl:leading-[38px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[100%]">
                    {"See more on Gallery >"}
                  </Text>
                </Column>
              </Stack>
            </Row>
          </Column>
        </Row>
        <Stack className="3xl:h-[1015px] lg:h-[658px] xl:h-[752px] h-[845px] 2xl:h-[846px] 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] mt-[91px] w-[100%]">
          <Row
            className="absolute bg-cover bg-repeat items-start justify-start xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:pl-[103px] pl-[116px] 3xl:pl-[139px] lg:pl-[90px] lg:pt-[38px] xl:pt-[44px] pt-[50px] 3xl:pt-[60px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group37.png')" }}
          >
            <Column className="items-start justify-start mb-[101px] 3xl:mb-[121px] lg:mb-[78px] xl:mb-[89px] 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] mt-[91px] w-[24%]">
              <Column className="items-center w-[100%]">
                <Text className="font-semibold lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-white_A700 w-[auto]">
                  Our Testimonials
                </Text>
              </Column>
              <Image
                src={"images/img_group61.png"}
                className="lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain w-[36%]"
                alt="Group61"
              />
            </Column>
            <Column className="items-start justify-start lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] lg:mt-[64px] xl:mt-[73px] mt-[83px] 3xl:mt-[99px] w-[33%]">
              <Column className="items-center xl:pl-[2px] lg:pl-[2px] pl-[3px] w-[100%]">
                <Text className="font-normal italic lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[100%]">
                  “My child has been learning since she was in Nursery. I love
                  the way teachers focus on student individually.”
                </Text>
              </Column>
              <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                <span className="text-white_A700 font-poppins">
                  Lorem Ipsum,{" "}
                </span>
                <span className="text-white_A700 font-poppins font-normal">
                  Parent
                </span>
              </Text>
            </Column>
            <Image
              src={"images/img_group64.png"}
              className="lg:h-[245px] xl:h-[281px] h-[315px] 2xl:h-[316px] 3xl:h-[379px] ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] object-contain w-[17%]"
              alt="Group64"
            />
          </Row>
          <footer className="absolute bg-indigo_900 w-[100%]">
            <Row className="items-start justify-start w-[89%]">
              <Column className="items-start justify-start w-[63%]">
                <Row className="items-start justify-start w-[82%]">
                  <Column className="items-start justify-start w-[22%]">
                    <Text className="font-medium xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      Explore
                    </Text>
                    <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      About Us
                    </Text>
                    <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Facilities
                    </Text>
                    <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Gallery
                    </Text>
                    <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Notification
                    </Text>
                    <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Contact
                    </Text>
                    <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Carrers
                    </Text>
                    <Column className="items-center w-[100%]">
                      <Column className="bg-orange_200 items-center justify-start lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs w-[100%]">
                        <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                          Apply Now
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="items-start justify-start xl:mb-[104px] mb-[118px] 3xl:mb-[141px] lg:mb-[91px] lg:ml-[130px] xl:ml-[149px] ml-[168px] 3xl:ml-[201px] w-[53%]">
                    <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      Connect
                    </Text>
                    <Row className="items-start justify-start w-[86%]">
                      <Column className="items-start justify-start lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[4%]">
                        <Image
                          src={"images/img_location_1.png"}
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] object-contain w-[75%]"
                          alt="Location"
                        />
                        <Column className="items-center lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]">
                          <Image
                            src={"images/img_vector_4.png"}
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] object-cover w-[100%]"
                            alt="Vector"
                          />
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] w-[91%]">
                        <Text className="font-normal 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                          Pokhara- 4, Gairapatan, Kaski
                        </Text>
                        <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                          061-524997,061-525390
                        </Text>
                      </Column>
                    </Row>
                    <Column className="items-center xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]">
                      <Row className="items-start justify-start w-[100%]">
                        <Image
                          src={"images/img_group_15.png"}
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] object-contain w-[3%]"
                          alt="Group"
                        />
                        <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                          loremuipsum@gmail.com
                        </Text>
                      </Row>
                    </Column>
                    <Image
                      src={"images/img_group59.png"}
                      className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] object-contain w-[48%]"
                      alt="Group59"
                    />
                  </Column>
                </Row>
                <Column className="items-end lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                    © 2021 SPIRAL GALAXY HIGHER SECONDARY SCHOOL
                  </Text>
                </Column>
              </Column>
              <Column className="items-start justify-start 3xl:mb-[112px] lg:mb-[73px] xl:mb-[83px] mb-[94px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] w-[37%]">
                <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                  Find Us
                </Text>
                <Column className="items-center w-[100%]">
                  <Stack className="lg:h-[207px] xl:h-[237px] h-[266px] 2xl:h-[267px] 3xl:h-[320px] w-[100%]">
                    <Stack className="absolute lg:h-[207px] xl:h-[236px] h-[265px] 2xl:h-[266px] 3xl:h-[319px] top-[0] w-[100%]">
                      <Image
                        src={"images/img_rectangle39.png"}
                        className="absolute lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-contain rounded-radius10 w-[88%]"
                        alt="Rectangle39"
                      />
                      <Column
                        className="absolute bg-cover bg-repeat items-start justify-start lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group14_1.png')",
                        }}
                      >
                        <Column className="items-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[98%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Column className="bg-white_A700 items-center lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] lg:pl-[49px] xl:pl-[56px] pl-[64px] 3xl:pl-[76px] xl:pt-[1px] lg:pt-[1px] pt-[2px] rounded-radius2 shadow-bs w-[33%]">
                              <Line className="bg-gray_301 h-[1px] rotate-[-90deg] w-[1%]" />
                            </Column>
                            <Button className="bg-white_A700 flex lg:h-[28px] xl:h-[32px] h-[35px] 2xl:h-[36px] 3xl:h-[43px] items-center justify-center lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius2 lg:w-[27px] xl:w-[31px] w-[35px] 3xl:w-[42px]">
                              <Image
                                src={"images/img_group1_6.png"}
                                className="w-[18.67px] h-[18.67px] flex items-center justify-center lg:w-[14px] lg:h-[15px] xl:w-[16px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[19px] 3xl:w-[22px] 3xl:h-[23px]"
                                alt="Group1"
                              />
                            </Button>
                          </Row>
                        </Column>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] w-[60%]">
                          <Image
                            src={"images/img_openmojilocati.png"}
                            className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                            alt="openmojilocati"
                          />
                          <Stack className="bg-white_A700 lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:pt-[5px] xl:pt-[6px] pt-[7px] 3xl:pt-[8px] rounded-radius2 w-[13%]">
                            <Image
                              src={"images/img_vector_5.png"}
                              className="absolute lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] inset-[0] justify-center m-[auto] object-contain w-[92%]"
                              alt="Vector"
                            />
                          </Stack>
                        </Row>
                        <Column className="bg-white_A700 items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[11px] xl:pb-[13px] pb-[15px] 3xl:pb-[18px] xl:pl-[3px] lg:pl-[3px] pl-[4px] xl:pr-[2px] lg:pr-[2px] pr-[3px] lg:pt-[10px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] rounded-radius2 w-[8%]">
                          <Stack className="lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] xl:ml-[2px] lg:ml-[2px] ml-[3px] xl:mr-[3px] lg:mr-[3px] mr-[4px] lg:w-[16px] xl:w-[18px] w-[21px] 3xl:w-[25px]">
                            <Line className="absolute bg-gray_600 bottom-[33%] h-[3px] w-[100%]" />
                            <Line className="absolute bg-gray_600 h-[3px] inset-x-[43%] rotate-[-90deg] w-[14%]" />
                          </Stack>
                          <Line className="bg-gray_301 h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                          <Line className="bg-gray_600 h-[3px] xl:ml-[1px] lg:ml-[1px] ml-[2px] xl:mr-[2px] lg:mr-[2px] mr-[3px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[82%]" />
                        </Column>
                      </Column>
                    </Stack>
                    <Text className="absolute font-medium left-[4%] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 top-[0] w-[auto]">
                      Map
                    </Text>
                    <Text className="absolute font-medium left-[18%] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]">
                      Satellite
                    </Text>
                  </Stack>
                </Column>
              </Column>
            </Row>
          </footer>
        </Stack>
      </Column>
    </>
  );
};

export default SchoolWebsitePage;
