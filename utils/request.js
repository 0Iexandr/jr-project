const { GraphQLClient, gql } = require('graphql-request');

export const query = gql`
  query MyQuery {
    careerSection {
      description {
        title
        description
      }
      email
    }
    clientsSection {
      sliderImages {
        alt
        image
        id
      }
    }
    contactSection {
      email
      price
      projectTypes {
        id
        projectType
      }
    }
    feelFreeToContactUsSection {
      description {
        description
        title
      }
    }
    footer {
      address
      email
      socialIcons {
        alt
        id
        image
      }
    }
    hero {
      sliderImages {
        alt
        id
        image
      }
    }
    howWeWorkSection {
      step {
        title
        image
        id
        description
      }
    }
    servicesSection {
      service {
        id
        image
        title
        description
      }
    }
    teamSection {
      teamMember {
        description
        id
        name
        photo
        role
      }
    }
    whyChooseUsSection {
      reason {
        description
        image
        id
        title
      }
    }
    worksSection {
      work {
        alt
        id
        image
        workType
      }
    }
  }
`;

export function DataRequest() {
  const endpoint = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Barear ' + process.env.NEXT_DATOCMS_API_TOKEN,
    },
  });
  return client.request(query);
}
