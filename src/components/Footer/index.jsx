import React from "react";
import { Grid } from "semantic-ui-react";
import {
  FacebookShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon
} from "react-share";
import "./Footer.css";

const Footer = () => {
  const shareUrl = "https://contemosnosotros.org/";
  const title = "Contemos Nosotros";
  const exampleImage = "favicon.png";

  return (
    <div className="ui inverted vertical footer segment form-page">
      <div className="ui container">
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={6} textAlign="left">
              Contemos Nosotros 2019
            </Grid.Column>
            <Grid.Column width={10} textAlign="right">
              <div>
                <div className="socialn">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="socialn-share-button"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <FacebookShareCount
                    url={shareUrl}
                    className="socialn-share-count"
                  >
                    {count => count}
                  </FacebookShareCount>
                </div>

                <div className="socialn">
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="socialn-share-button"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <div className="socialn-share-count">&nbsp;</div>
                </div>

                <div className="socialn">
                  <LinkedinShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={750}
                    windowHeight={600}
                    className="socialn-share-button"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>

                  <LinkedinShareCount
                    url={shareUrl}
                    className="socialn-share-count"
                  >
                    {count => count}
                  </LinkedinShareCount>
                </div>

                <div className="socialn">
                  <PinterestShareButton
                    url={String(window.location)}
                    media={`${String(window.location)}/${exampleImage}`}
                    windowWidth={1000}
                    windowHeight={730}
                    className="socialn-share-button"
                  >
                    <PinterestIcon size={32} round />
                  </PinterestShareButton>

                  <PinterestShareCount
                    url={shareUrl}
                    className="socialn-share-count"
                  />
                </div>

                <div className="socialn">
                  <RedditShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                    className="socialn-share-button"
                  >
                    <RedditIcon size={32} round />
                  </RedditShareButton>

                  <RedditShareCount
                    url={shareUrl}
                    className="socialn-share-count"
                  />
                </div>

                <div className="socialn">
                  <TumblrShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                    className="socialn-share-button"
                  >
                    <TumblrIcon size={32} round />
                  </TumblrShareButton>

                  <TumblrShareCount
                    url={shareUrl}
                    className="socialn-share-count"
                  />
                </div>

                <div className="socialn">
                  <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="socialn-share-button"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>

                  <div className="socialn-share-count">&nbsp;</div>
                </div>

                <div className="socialn">
                  <TelegramShareButton
                    url={shareUrl}
                    title={title}
                    className="socialn-share-button"
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>

                  <div className="socialn-share-count">&nbsp;</div>
                </div>

                <div className="socialn">
                  <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body={`Te invitamos a contar: ${shareUrl}`}
                    className="socialn-share-button"
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
