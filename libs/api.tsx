const POST_GRAPHQL_FIELDS = `
    image{url},
    altText
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["skills"] },
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.programmingSkillsCollection?.items;
}

export async function getAllProgrammingSkills() {
  const entries = await fetchGraphQL(
    `query {
        programmingSkillsCollection {
            items {
              image{url},
              altText
            }
        }
    }`
  );
  return extractPostEntries(entries);
}
