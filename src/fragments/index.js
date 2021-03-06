// Vendor Modules
import { graphql } from 'gatsby'

export const gatsbyFragments = graphql`
  fragment quarterImage on Wagtail_ImageObjectType {
    src: rendition(format: "quarter") {
      url
      width
      height
    }
    alt
  }

  fragment iconImage on Wagtail_ImageObjectType {
    src: rendition(format: "icon") {
      url
      width
      height
    }
    alt
  }

  fragment largeIconImage on Wagtail_ImageObjectType {
    src: rendition(format: "large-icon") {
      url
      width
      height
    }
    alt
  }

  fragment fullImage on Wagtail_ImageObjectType {
    src: rendition(format: "full") {
      url
      width
      height
    }
    alt
  }

  fragment maxImage on Wagtail_ImageObjectType {
    src: rendition(format: "max") {
      url
      width
      height
    }
    alt
  }

  fragment facebookImage on Wagtail_ImageObjectType {
    src: rendition(format: "facebook") {
      url
      width
      height
    }
    alt
  }

  fragment twitterImage on Wagtail_ImageObjectType {
    src: rendition(format: "twitter") {
      url
      width
      height
    }
    alt
  }

  fragment contactSnippet on Wagtail_ContactObjectType {
    name
    role
    emailAddress
    phoneNumber
    image {
      ...iconImage
    }
  }

  fragment contactReasonsSnippet on Wagtail_ContactReasonsObjectType {
    heading
    reasons {
      title
      description
    }
  }
`

export const previewFragments = `
  fragment quarterImage on ImageObjectType {
    src: rendition(format: "quarter") {
      url
      width
      height
    }
    alt
  }

  fragment iconImage on ImageObjectType {
    src: rendition(format: "icon") {
      url
      width
      height
    }
    alt
  }

  fragment largeIconImage on ImageObjectType {
    src: rendition(format: "large-icon") {
      url
      width
      height
    }
    alt
  }

  fragment fullImage on ImageObjectType {
    src: rendition(format: "full") {
      url
      width
      height
    }
    alt
  }

  fragment maxImage on ImageObjectType {
    src: rendition(format: "max") {
      url
      width
      height
    }
    alt
  }

  fragment contactSnippet on ContactObjectType {
    name
    role
    emailAddress
    phoneNumber
    image {
      ...iconImage
    }
  }

  fragment contactReasonsSnippet on ContactReasonsObjectType {
    heading
    reasons {
      title
      description
    }
  }
`
