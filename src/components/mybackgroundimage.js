import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage  from "gatsby-background-image";
import styled from "styled-components";


const BackgroundSection = () => (
    <StaticQuery 
        query={graphql`
            query {
                desktop: file(relativePath: {eq: "covid-19 background.jpg"}) {
                    childImageSharp {
                        fluid (quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }`
        }
        render={
            data => {
                const imageData = data.desktop.childImageSharp.fluid
                return (
                    <BackgroundImage
                      Tag="section"
                      fluid={imageData}
                      backgroundColor={`#040e18`} >
                    </BackgroundImage>
                )
            }
        }
    />
)
            
            const MyBackgroundImage = styled(BackgroundSection)`
              width: 100%;
              background-position: bottom center;
              background-repeat: repeat-y;
              background-size: cover;
              `

export default MyBackgroundImage