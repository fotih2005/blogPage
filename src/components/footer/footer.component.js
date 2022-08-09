import {
  FooterItemCard,
  FooterItemLink,
  FooterItemList,
  FooterList,
  FooterListWrapper,
  FooterLogo,
  FooterWrapper,
  ListItem,
  SiteFooter,
} from "./footer.style";

function Footer() {
  return (
    <>
      <SiteFooter>
        <FooterWrapper>
          <FooterLogo>
            <svg
              width={182}
              height={70}
              viewBox="0 0 182 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35 0C6.1775 0 0 6.1775 0 35C0 63.8225 6.1775 70 35 70C63.8225 70 70 63.8225 70 35C70 6.1775 63.8225 0 35 0ZM25.76 22.2539V46.0422H36.8851C41.4724 46.0422 44.9399 43.0866 44.9399 38.9777C44.9399 37.3547 44.42 36.0101 43.4778 34.9737C42.8299 34.2611 41.9823 33.6942 40.9667 33.283C41.6629 32.5111 42.1014 31.6107 42.2954 30.5817C42.373 30.1692 42.4115 29.736 42.4115 29.2822C42.4115 25.1373 38.9439 22.2539 34.3567 22.2539H25.76ZM46.3396 33.7391C45.9393 33.1782 45.4796 32.6785 44.973 32.2372C45.2775 31.2984 45.4216 30.3061 45.4216 29.2822C45.4216 23.0755 40.1716 19.2503 34.3567 19.2503H22.75V49.0457H36.8851C42.7326 49.0457 47.95 45.1202 47.95 38.9777C47.95 37.0449 47.4188 35.2508 46.3396 33.7391ZM33.9593 31.6611C34.2373 31.6611 34.4948 31.6319 34.7299 31.5761C35.7474 31.3346 36.3433 30.5953 36.3433 29.5706C36.3433 28.5458 35.7474 27.8064 34.7299 27.5651C34.4948 27.5093 34.2373 27.4801 33.9593 27.4801H31.7199V31.6611H33.9593ZM36.6512 37.8022C36.6541 37.8016 36.6555 37.8012 36.6554 37.8011C36.6552 37.801 36.6506 37.8017 36.6422 37.8038C36.6461 37.8032 36.6491 37.8027 36.6512 37.8022ZM36.6422 39.6472C36.6513 39.6486 36.6556 39.6496 36.6554 39.6498C36.6552 39.65 36.6506 39.6493 36.6422 39.6472ZM38.8717 38.7255C38.8717 40.1312 37.9687 40.816 36.4878 40.816H31.7199V36.635H36.4878C37.9687 36.635 38.8717 37.3198 38.8717 38.7255Z"
                fill="white"
              />
              <path
                d="M102.08 34.295C104.227 35.5317 105.3 37.3983 105.3 39.895C105.3 41.9717 104.565 43.675 103.095 45.005C101.625 46.335 99.8167 47 97.67 47H87.275V22.5H96.935C99.035 22.5 100.797 23.1533 102.22 24.46C103.667 25.7433 104.39 27.3883 104.39 29.395C104.39 31.425 103.62 33.0583 102.08 34.295ZM96.935 27.015H92.105V32.405H96.935C97.6817 32.405 98.3 32.1483 98.79 31.635C99.3033 31.1217 99.56 30.48 99.56 29.71C99.56 28.94 99.315 28.2983 98.825 27.785C98.335 27.2717 97.705 27.015 96.935 27.015ZM97.67 42.485C98.4867 42.485 99.1633 42.2167 99.7 41.68C100.237 41.12 100.505 40.42 100.505 39.58C100.505 38.7633 100.237 38.0867 99.7 37.55C99.1633 36.99 98.4867 36.71 97.67 36.71H92.105V42.485H97.67ZM123.44 44.83C121.643 46.6033 119.45 47.49 116.86 47.49C114.27 47.49 112.077 46.6033 110.28 44.83C108.507 43.0333 107.62 40.84 107.62 38.25C107.62 35.66 108.507 33.4783 110.28 31.705C112.077 29.9083 114.27 29.01 116.86 29.01C119.45 29.01 121.643 29.9083 123.44 31.705C125.237 33.4783 126.135 35.66 126.135 38.25C126.135 40.84 125.237 43.0333 123.44 44.83ZM113.465 41.715C114.375 42.625 115.507 43.08 116.86 43.08C118.213 43.08 119.345 42.625 120.255 41.715C121.165 40.805 121.62 39.65 121.62 38.25C121.62 36.85 121.165 35.695 120.255 34.785C119.345 33.875 118.213 33.42 116.86 33.42C115.507 33.42 114.375 33.875 113.465 34.785C112.578 35.695 112.135 36.85 112.135 38.25C112.135 39.65 112.578 40.805 113.465 41.715ZM139.496 29.01C141.853 29.01 143.859 29.9083 145.516 31.705C147.196 33.4783 148.036 35.66 148.036 38.25C148.036 40.84 147.196 43.0333 145.516 44.83C143.859 46.6033 141.853 47.49 139.496 47.49C137.046 47.49 135.156 46.6383 133.826 44.935V47H129.311V22.5H133.826V31.565C135.156 29.8617 137.046 29.01 139.496 29.01ZM135.191 41.82C136.101 42.73 137.256 43.185 138.656 43.185C140.056 43.185 141.211 42.73 142.121 41.82C143.054 40.8867 143.521 39.6967 143.521 38.25C143.521 36.8033 143.054 35.625 142.121 34.715C141.211 33.7817 140.056 33.315 138.656 33.315C137.256 33.315 136.101 33.7817 135.191 34.715C134.281 35.625 133.826 36.8033 133.826 38.25C133.826 39.6967 134.281 40.8867 135.191 41.82ZM162.77 29.5H167.285V47H162.77V45.04C161.674 46.6733 159.935 47.49 157.555 47.49C155.642 47.49 154.055 46.8483 152.795 45.565C151.559 44.2817 150.94 42.5083 150.94 40.245V29.5H155.455V39.685C155.455 40.8517 155.77 41.75 156.4 42.38C157.03 42.9867 157.87 43.29 158.92 43.29C160.087 43.29 161.02 42.9283 161.72 42.205C162.42 41.4817 162.77 40.3967 162.77 38.95V29.5ZM175.935 32.51C176.355 31.39 177.044 30.55 178 29.99C178.98 29.43 180.065 29.15 181.255 29.15V34.19C179.879 34.0267 178.642 34.3067 177.545 35.03C176.472 35.7533 175.935 36.955 175.935 38.635V47H171.42V29.5H175.935V32.51Z"
                fill="white"
              />
            </svg>
          </FooterLogo>
          <FooterListWrapper>
            <FooterList>
              <ListItem>
                <h3 className="footer-item-title">FIGHT WITH ME ON:</h3>
                <FooterItemList>
                  <FooterItemCard>
                    <FooterItemLink href="https://twitter.com">
                      Twitter
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://instagram.com">
                      Instagram
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://t.me/miyagi_black">
                      Telegram
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://youTube.com">
                      YouTube
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://figma.com">
                      Figma
                    </FooterItemLink>
                  </FooterItemCard>
                </FooterItemList>
              </ListItem>
              <ListItem>
                <h3 className="footer-item-title">WHAT I HAVE DONE:</h3>
                <FooterItemList>
                  <FooterItemCard>
                    <FooterItemLink href="https://nbu.uz/uz/">
                      Xalq Kutubxonasi
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://google.com">
                      Websitee
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://google.com">
                      Website
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://play.google.com/store/games">
                      Play Market
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://www.apple.com/app-store/">
                      App Store
                    </FooterItemLink>
                  </FooterItemCard>
                </FooterItemList>
              </ListItem>
              <ListItem>
                <h3 className="footer-item-title">Contact</h3>
                <FooterItemList>
                  <FooterItemCard>
                    <FooterItemLink href="https://google.com">
                      Blog
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://google.com">
                      Dribbble
                    </FooterItemLink>
                  </FooterItemCard>
                  <FooterItemCard>
                    <FooterItemLink href="https://google.com">
                      Behance
                    </FooterItemLink>
                  </FooterItemCard>
                </FooterItemList>
              </ListItem>
            </FooterList>
          </FooterListWrapper>
        </FooterWrapper>
      </SiteFooter>
    </>
  );
}

export default Footer;
